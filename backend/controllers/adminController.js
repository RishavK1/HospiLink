import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // Validate required fields
    if (
      !name ||
      !email ||
      !password ||
      !imageFile || // Use imageFile instead of image
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    // Parse address correctly
    let parsedAddress;
    try {
      parsedAddress = JSON.parse(address);
    } catch (error) {
      return res.json({ success: false, message: "Invalid address format" });
    }

    // Create doctor object
    const doctorData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: parsedAddress,
      date: Date.now(),
    };

    // Save doctor to database
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for admin login

export const loginAdmin = async (req, res) => { 
try {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(email + password, process.env.JWT_SECRET);
    res.json({ success: true, message: "Login Successful", token });
  } else { 
    res.json({ success: false, message: "Invalid Credentials" });
  }
} catch (error) {
  console.log(error);
  res.json({ success: false, message: error.message });
}
}

// API to get all doctors
export const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}
