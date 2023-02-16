import { Router } from "express";
import {  getQrcodeData,postQrcodeData} from "./qrcodecontroller";

const router = Router();

router.route("/").get(getQrcodeData).post(postQrcodeData);

export default router;
