import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

authSchema.pre("save", async function (next) {
  try {
    const user = this;
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    next();
  } catch (error) {
    console.log("Error while hashing the password", error);
  }
});

authSchema.methods.generateAuthToken = async function () {
  try {
    const user = this;
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    return token;
  } catch (error) {
    console.log("Error while generating the token", error);
  }
};

const User = new model("User", authSchema);
export default User;
