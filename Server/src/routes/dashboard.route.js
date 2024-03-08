import express from "express";
import { Item } from "../models/marketPlaceItems.model.js";
import { SoldItem } from "../models/soldItem.model.js";

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

router.get("/dashboard/soldItem/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const soldItems = await SoldItem.find({ username: username });
    res.json(soldItems ? soldItems : []);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
