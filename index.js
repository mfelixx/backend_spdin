import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import fs from "fs";
import notifR from "./routes/notifR.js";
import dotenv from "dotenv";

dotenv.config();

// load service account key
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/sendnotif", notifR);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default admin;
