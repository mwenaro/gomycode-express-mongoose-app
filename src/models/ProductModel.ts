import mongoose, { Schema } from "mongoose";
export interface IProduct {
  name: string;
  price: number;
  category: "shoes" | "cloth" | "fruits";
  createAt?: Date;
  updatedAt?: Date;
 
}
//schema
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: String, enum: ["shoes", "cloth", "fruits"] },
  },
  {
    timestamps: true,
  }
);

//create & export model
export const ProductModel =
  mongoose.models.ProductModel || mongoose.model("ProductModel", productSchema);
