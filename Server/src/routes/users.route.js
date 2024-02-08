import express from "express";
import { User } from "../models/users.model.js";

const router = express.Router();

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find({});
    console.log("DB.find Called");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
