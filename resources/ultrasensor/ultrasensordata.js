import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UltraDataSchema = new Schema(
    {
        distance: Schema.Types.String,
    },
    { timestamps: true, strict: false }
);

export const UltraData = model("ultradata", UltraDataSchema);
