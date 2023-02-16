import mongoose from "mongoose";
const { Schema, model } = mongoose;

const QrcodeDataSchema = new Schema(
  {
    value: Schema.Types.String,
  },
  { timestamps: true, strict: false }
);

export const QRcodeData = model("qrcodedata", QrcodeDataSchema);
