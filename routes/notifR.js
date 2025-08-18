import express from "express";
import { sendNotification } from "../controllers/notifC.js";

const router = express.Router();
router.post("/", sendNotification);

export default router;
