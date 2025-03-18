import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import mainlogo from "./mainlogo.svg"

import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";



import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";


export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
  mainlogo,
};


export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },

  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Pediatrician",
    image: Pediatricians,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];



export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. He ensures patients receive timely medical attention and personalized healthcare services.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Carter",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Emily Carter specializes in women’s health, providing expert care for pregnancy, reproductive health, and hormonal balance. She is dedicated to ensuring safe maternal health and personalized treatment for gynecological conditions.",
    fees: 60,
    address: {
      line1: "21st Street, Manhattan",
      line2: "New York, USA",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Michael Smith",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "6 Years",
    about:
      "Dr. Michael Smith is an expert in treating skin disorders, cosmetic dermatology, and hair loss treatments. He provides advanced skincare solutions for both medical and aesthetic concerns.",
    fees: 70,
    address: {
      line1: "Lakeview Residency, Suite 14",
      line2: "Toronto, Canada",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Sophia Williams",
    image: doc4,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM",
    experience: "10 Years",
    about:
      "Dr. Sophia Williams focuses on digestive health, diagnosing and treating disorders of the stomach, liver, and intestines. She emphasizes lifestyle modifications and preventive care to improve gut health.",
    fees: 90,
    address: {
      line1: "Sunrise Apartments, Block A",
      line2: "Sydney, Australia",
    },
  },
  {
    _id: "doc5",
    name: "Dr. John Doe",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM Neurology",
    experience: "12 Years",
    about:
      "Dr. John Doe specializes in diagnosing and managing neurological disorders, including migraines, epilepsy, and movement disorders. He is dedicated to improving patient well-being through innovative treatments.",
    fees: 100,
    address: {
      line1: "Hilltop Residency, Sector 45",
      line2: "Bangalore, India",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Olivia Brown",
    image: doc6,
    speciality: "Pediatrician",
    degree: "MBBS, MD Pediatrics",
    experience: "7 Years",
    about:
      "Dr. Olivia Brown is passionate about child healthcare, ensuring proper growth, vaccination, and disease prevention in children. She provides compassionate care to young patients and their families.",
    fees: 60,
    address: {
      line1: "Maple Street, Apartment 302",
      line2: "Chicago, USA",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Ethan Wilson",
    image: doc7,
    speciality: "Dermatologist",
    degree: "MBBS, DM Cardiology",
    experience: "15 Years",
    about:
      "Dr. Ethan Wilson specializes in heart health, treating cardiovascular diseases, hypertension, and heart attacks. His expertise ensures optimal heart function and patient recovery.",
    fees: 150,
    address: {
      line1: "Downtown Plaza, Office 201",
      line2: "Los Angeles, USA",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Isabella Johnson",
    image: doc8,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD Endocrinology",
    experience: "9 Years",
    about:
      "Dr. Isabella Johnson provides expert care for hormonal imbalances, diabetes, and thyroid disorders. She focuses on personalized treatment plans for long-term health.",
    fees: 80,
    address: {
      line1: "Whitefield Towers, 8th Floor",
      line2: "Melbourne, Australia",
    },
  },
  {
    _id: "doc9",
    name: "Dr. William Anderson",
    image: doc9,
    speciality: "Pediatrician",
    degree: "MBBS, DM Oncology",
    experience: "14 Years",
    about:
      "Dr. William Anderson specializes in cancer treatment, offering chemotherapy, radiation therapy, and targeted treatments to improve patient survival rates.",
    fees: 200,
    address: {
      line1: "Greenway Residency, Block C",
      line2: "New York, USA",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Mia Thompson",
    image: doc10,
    speciality: "Neurologist",
    degree: "MBBS, MS Orthopedics",
    experience: "11 Years",
    about:
      "Dr. Mia Thompson focuses on joint replacement, fracture treatment, and sports injuries. She ensures effective rehabilitation and pain management for orthopedic patients.",
    fees: 120,
    address: {
      line1: "Sunset Avenue, Tower 5",
      line2: "San Francisco, USA",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Daniel Clark",
    image: doc11,
    speciality: "General physician",
    degree: "MBBS, MD Psychiatry",
    experience: "13 Years",
    about:
      "Dr. Daniel Clark provides expert care for mental health conditions, including anxiety, depression, and PTSD. He is dedicated to improving emotional well-being through therapy and medication.",
    fees: 90,
    address: {
      line1: "Skyline Apartments, Floor 12",
      line2: "Berlin, Germany",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Ava Martinez",
    image: doc12,
    speciality: "Dermatologist",
    degree: "MBBS, MD Pulmonology",
    experience: "10 Years",
    about:
      "Dr. Ava Martinez specializes in lung diseases, treating conditions like asthma, COPD, and pneumonia. She focuses on respiratory health and disease prevention.",
    fees: 85,
    address: {
      line1: "Harbor Bay Residency, Suite 301",
      line2: "Miami, USA",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Henry White",
    image: doc13,
    speciality: "Gynecologist",
    degree: "MBBS, DM Nephrology",
    experience: "16 Years",
    about:
      "Dr. Henry White is an expert in kidney care, managing dialysis, kidney transplants, and renal disorders. His approach ensures improved kidney function and patient health.",
    fees: 130,
    address: {
      line1: "Central Park Residency, Block D",
      line2: "London, UK",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Emma Harris",
    image: doc14,
    speciality: "Pediatrician",
    degree: "MBBS, MD Rheumatology",
    experience: "12 Years",
    about:
      "Dr. Emma Harris specializes in autoimmune diseases and arthritis treatment, ensuring mobility and pain relief for her patients.",
    fees: 95,
    address: {
      line1: "Riverfront View, 9th Floor",
      line2: "Toronto, Canada",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Liam Garcia",
    image: doc15,
    speciality: "Neurologist",
    degree: "MBBS, MS Urology",
    experience: "8 Years",
    about:
      "Dr. Liam Garcia provides expert care for urinary tract issues, kidney stones, and male reproductive health, ensuring effective treatments and patient comfort.",
    fees: 100,
    address: {
      line1: "Palm Residency, Suite 707",
      line2: "Dubai, UAE",
    },
  },
];

