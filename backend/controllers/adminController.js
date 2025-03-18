import validator from "validator";
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
// API for adding doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !image ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      res.json({
        success: false,
        message: "Please enter a strong password",
      });

      const salt = await bcrypt.salt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
      const imageUrl = imageUpload.secure_url;

      const doctorData = {
        name,
        email,
        password:hashedPassword,
        image:imageUrl,
        speciality,
        degree,
        experience,
        about,
        fees,
        address: JSON.parse(address),
        date : Date.now(),
      };

      const newDoctor = new doctorModel(doctorData);
      await newDoctor.save();

      res.json({ success: true, message: "Doctor Added" });
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message:error.message });
  }
};
