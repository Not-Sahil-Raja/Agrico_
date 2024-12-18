import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const LessonPost = mongoose.model("Post", postSchema);
