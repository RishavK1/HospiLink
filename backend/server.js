import express from "express"
import cors from "cors"
import dotenv from 'dotenv/config'
import connectDb from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
connectDb();
connectCloudinary();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

// api end points

app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter); 


app.get("/", (req, res) => {
    res.send("API is working Fine");
})


app.listen(port, () => {
    console.log("Server Started", port);
})




