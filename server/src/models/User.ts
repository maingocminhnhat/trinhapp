import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    avatar: { type: String },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export { User };
