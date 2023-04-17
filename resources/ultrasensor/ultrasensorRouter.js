import { Router } from "express";
import { getUltraData, postUltraData, getSingleUltraData } from "./ultrasensorController";

const router = Router();

router.route("/").get(getUltraData).post(postUltraData);
router.route("/single").get(getSingleUltraData);

export default router;
