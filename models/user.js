import { Schema, model } from "mongoose";

export default model(
  "User",
  new Schema({
    username: { type: String, required: true },
  })
);
