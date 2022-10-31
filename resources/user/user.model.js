import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CarbonDataSchema = new Schema(
  {
    tempInDegrees: String,
    tempInFarenheit: String,
  },
  { timestamps: true }
);

export const CarbonData = model("carbondata", CarbonDataSchema);
