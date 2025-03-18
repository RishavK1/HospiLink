import express from "express"
import cors from "cors"
import dotenv from 'dotenv/config'
import connectDb from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
connectDb();
connectCloudinary();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

// api end points

app.use('/api/admin', adminRouter)

app.get("/", (req, res) => {
    res.send("API is working Fine");
})


app.listen(port, () => {
    console.log("Server Started", port);
})




