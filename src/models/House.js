import { Schema, model } from "mongoose";
import User from "./User";

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("House", HouseSchema);
