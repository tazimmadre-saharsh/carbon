import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CarbonDataSchema = new Schema(
  {
    temp: Schema.Types.String,
  },
  { timestamps: true, strict: false }
);

export const CarbonData = model("carbondata", CarbonDataSchema);
