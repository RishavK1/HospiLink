import express from "express";
import { doctorList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

// Importing the controller functions

doctorRouter.get("/list", doctorList);

export default doctorRouter;