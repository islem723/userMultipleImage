import { Schema, model } from "mongoose";

export default model(
  "Image",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      owner: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  )
);
