import mongoose from "mongoose";

// interface
export interface IUser {
  name: string;
  email: string;
  password?: string;
  username: string;
  role: "user" | "admin" | "guest";
  createdAt?: Date;
  updatedAt?: Date;
}

//schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: {
      type: String,
      default: "123456",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "guest", "admin"],
      default: "guest",
    },
  },
  {
    timestamps: true,
  }
);

//create & export model
export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);