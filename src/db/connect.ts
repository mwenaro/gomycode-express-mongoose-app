import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`Db connected successfully!`);
  } catch (error: any) {
    console.log(`Db connectionj error => ${error.message}`);
  }
}
