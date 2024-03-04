import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    //add image
    image: {
      type: String, // cloudinary url
    },

    username: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Item = mongoose.model("itemsDetails", itemSchema);
