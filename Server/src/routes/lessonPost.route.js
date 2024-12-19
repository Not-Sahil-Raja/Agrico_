import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { LessonPost } from "../models/lessonPost.model.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const router = express.Router();

router.post("/create", upload.array("image"), async (req, res) => {
  try {
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
      const file = req.files[i];
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "demo" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      if (result && result.secure_url) UploadedImages.push(result.secure_url);
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

router.get("/getLessons", async (req, res) => {
  try {
    // const limit = parseInt(req.query.limit) || 10;
    const allLessons = await LessonPost.find({}).limit(10);
    res.status(200).send(allLessons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/PopularArticles", async (req, res) => {
  try {
    const allLessons = await LessonPost.find({}).limit(4);
    res.status(200).send(allLessons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/getLesson/:id", async (req, res) => {
  try {
    const lesson = await LessonPost.findById(req.params.id);
    if (!lesson) {
      return res.status(404).send("Lesson Not Found");
    }
    res.status(200).send(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
