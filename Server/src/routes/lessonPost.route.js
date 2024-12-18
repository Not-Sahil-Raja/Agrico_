import express from "express";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import upload from "../middlewares/multer.middleware.js";
import { LessonPost } from "../models/lessonPost.model.js";

const router = express.Router();

router.post("/create", upload.array("image"), async (req, res) => {
  try {
    console.log("Files: ", req.files);
    console.log("Body: ", req.body);
    if (
      !req.body.username ||
      !req.body.category ||
      !req.body.title ||
      !req.body.shortDescription ||
      !req.body.description ||
      !req.body.tags ||
      !req.files ||
      req.files.length === 0
    ) {
      return res.status(400).send("Please fill all the fields");
    }

    const UploadedImages = [];
    for (let i = 0; i < req.files.length; i++) {
      const filePath = path.join(process.cwd(), "tmp", req.files[i].filename);
      const result = await uploadOnCloudinary(filePath);
      console.log(`Cloudinary Uploaded Link ${i + 1}: `, result);
      if (result && result.url) UploadedImages.push(result.url);
      fs.unlinkSync(filePath);
    }

    if (UploadedImages.length !== req.files.length) {
      return res.status(500).send("Failed !! All Images Not Uploaded");
    }

    const LessonObject = {
      username: req.body.username,
      category: req.body.category,
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      tags: req.body.tags,
      image: UploadedImages,
    };

    const NewLesson = await LessonPost.create(LessonObject);
    res.status(201).send(NewLesson);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
