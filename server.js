// packages
import express, { urlencoded, json } from "express";
const app = express();
import mongoose from "mongoose";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import expressListRoutes from "express-list-routes";

import CarbonRouter from "./resources/carbon/carbonRouter";
import QRCodeRouter from "./resources/qrcode/qrcodeRouter";
import UltrasensorRouter from './resources/ultrasensor/ultrasensorRouter';

config();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//endpoint shows Server Running
app.get("/", (req, res) => {
  res.json("Server is Running");
});

app.use("/api/v1/carbondata/", CarbonRouter);
app.use("/api/v1/qrcode/", QRCodeRouter);
app.use("/api/v1/ultrasensor-data/", UltrasensorRouter);

export const start = async () => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      if (process.env.NODE_ENV === "development") {
        expressListRoutes(app);
      }
      console.log(`REST API on http://localhost:${PORT}/`);
    });
  } catch (e) {
    console.error(e);
  }
};
//P139yx3Etzi5sIDO
