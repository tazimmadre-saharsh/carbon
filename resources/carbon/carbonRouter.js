import { Router } from "express";
import { getCarbonData, postCarbonData } from "./carboncontroller.js";

const router = Router();

router.route("/").get(getCarbonData).post(postCarbonData);

export default router;
