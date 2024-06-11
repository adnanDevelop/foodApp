import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

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

authSchema.methods.generateToken = async function () {
  try {
    const user = this;
    const token = await jsonwebtoken.sign({ userId: user._id });
  } catch (error) {
    console.log("Error while generating token", error);
  }
};

const User = new model("User", authSchema);
export default User;
