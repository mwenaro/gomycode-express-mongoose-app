const express = require("express");
import type { Response, Request } from "express";

//variables
const PORT = process.env.PORT || 5000;

//create app
const app = express();

//routes
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello from server app" });
});
//start server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
