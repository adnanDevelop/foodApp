import { Schema, model } from "mongoose";

const addressModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    street_number: {
      type: Number || String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    zip_code: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const user_address = new model("user_address", addressModel);
export default user_address;
