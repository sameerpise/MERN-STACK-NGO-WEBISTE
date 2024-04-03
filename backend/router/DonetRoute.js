import express from "express";
// import { Message } from "../controllers/messageController.js";
import {postDonationMessage} from "../controllers/DonetControllers.js"

const router = express.Router();

router.post("/Donet", postDonationMessage);

export default router;
