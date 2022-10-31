import { Router } from "express";
import { getCarbonData, postCarbonData } from "./user.controllers.js";

const router = Router();

router.route("/").get(getCarbonData).post(postCarbonData);

export default router;
