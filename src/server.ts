const express = require("express");
import type { Response, Request } from "express";
import { config } from "dotenv";
import { dbConnect } from "./db/connect";
import { productRouter } from "./routes/productRoute";
config()

//variables
const PORT = process.env.PORT || 5000;

//create app
const app = express();

//use meddilesraw
app.use(express.json())

//run db connection
dbConnect()


//products
app.use("/products", productRouter)
//routes
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello from server app" });
});
//start server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
