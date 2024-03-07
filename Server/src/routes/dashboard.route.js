import express from "express";
import { Item } from "../models/marketPlaceItems.model.js";

const router = express.Router();

router.get("/dashboard/listedItem/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const listedItems = await Item.find({ username: username });
    res.json(listedItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
