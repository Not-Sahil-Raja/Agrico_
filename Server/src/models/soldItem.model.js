import mongoose from "mongoose";

const soldItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: false,
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
    cover: {
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
    soldDet: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SoldItem = mongoose.model("solditemsDetails", soldItemSchema);
