import { Request, Response, Router } from "express";
import { ProductModel } from "../models/ProductModel";
const router = Router();

//POST /
router.post("/", async (req: Request, res: Response) => {
  try {
    //get the rew body
    const { body } = req;
    //create the product
    const newProduct = new ProductModel(body);

    const savedProduct = await newProduct.save();
    res.status(201).json({ success: true, data: savedProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: "Error => " + error.message });
  }
});

//GET /
router.get("/", async (req: Request, res: Response) => {
  try {
    const fetchedProducts = await ProductModel.find({});

    res.status(200).json({ success: true, data: fetchedProducts });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: "Error => " + error.message });
  }
});

//GET /:id
router.get("/:id", async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  try {
    const fetchedProduct = await ProductModel.findById(id);
    if (!fetchedProduct) res.status(404).json({ success: false, data: null });

    res.status(200).json({ success: true, data: fetchedProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: "Error => " + error.message });
  }
});

//PUT /:id

router.put("/:id", async (req: Request, res: Response) => {
  const {
    body,
    params: { id },
  } = req;
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedProduct) res.status(404).json({ success: false, data: null });

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: "Error => " + error.message });
  }
});

//DELETE /:id
router.delete("/:id", async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) res.status(404).json({ success: false, data: null });

    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: "Error => " + error.message });
  }
});

export { router as productRouter };
