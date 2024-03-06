import express from "express";
import { Item } from "../models/marketPlaceItems.model.js";
import cloudinary from "../utils/cloudinary.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// router.post("/Allitems", upload.single("image"), async (req, res) => {
router.post("/Allitems", async (req, res) => {
  try {
    if (
      !req.body.itemName ||
      !req.body.category ||
      !req.body.quantity ||
      !req.body.unit ||
      !req.body.price ||
      !req.body.username ||
      !req.body.contact ||
      !req.body.location
    ) {
      return res.status(400).send("Please fill all the fields");
    }
    // console.log(req.file);

    // console.log(req.files);

    // const result = await cloudinary.uploader.upload(req.file.path);
    const items = {
      itemName: req.body.itemName,
      itemDescription: req.body.itemDescription,
      category: req.body.category,
      quantity: req.body.quantity,
      unit: req.body.unit,
      price: req.body.price,
      username: req.body.username,
      contact: req.body.contact,
      location: req.body.location,
      // image: result.url,
    };
    const newItem = await Item.create(items);
    return res.status(201).send(newItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/itemsList", async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/itemsList/:username", async (req, res) => {
  try {
    const items = await Item.find({ username: req.params.username });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
