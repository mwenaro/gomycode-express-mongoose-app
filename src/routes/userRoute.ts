import { Router } from "express";
import { UserModel } from "../models/UserModel";

//create router
const router = Router();

//create users routes

// POST /
router.post("/", async (req, res) => {
  try {
    //extract request body
    const { body } = req;
    const savedUsers = await UserModel.insertMany(
      Array.isArray(body) ? body : [body]
    );
    // //crerate new user
    // const newUser = new UserModel(body);
    // //save the newUser
    // const savedUser = await newUser.save();

    if (!savedUsers) throw "Cound not insert";

    //send res to the client
    res.status(201).json({ success: true, data: savedUsers });
  } catch (error: any) {
    res.status(500).json({ error: "Error " + error.message });
  }
});

// GET /
router.get("/", async (req, res) => {
  try {
    const fetchedUsers = await UserModel.find({});
    if (!fetchedUsers || !fetchedUsers.length)
      res.status(404).json({ success: false, data: [] });
    res.json({ success: true, data: fetchedUsers });
  } catch (error: any) {
    res.status(500).json({ error: "Error " + error.message });
  }
});

// GET /:id
router.get("/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    //get 1 user
    const fetchedUser = await UserModel.findById(id);

    if (!fetchedUser) res.status(404).json({ success: false, data: null });

    //send res to the client
    res.status(200).json({ success: true, data: fetchedUser });
  } catch (error: any) {
    res.status(500).json({ error: "Error " + error.message });
  }
});

// PUT /:id
router.put("/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  try {
    //update user
    const updatedUser =
     await UserModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedUser)
      res.status(404).json({ success: false, error: "User not found" });

    //send res to the client
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error: any) {
    res.status(500).json({ error: "Error " + error.message });
  }
});

// DELETE /:id
router.delete("/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    //delete user by id
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser)
      res.status(404).json({ success: false, error: "User not found" });

    //send res to the client
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error: any) {
    res.status(500).json({ error: "Error " + error.message });
  }
});

export { router as userRouter };