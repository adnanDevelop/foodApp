import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

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

const User = new model("User", authSchema);
export default User;
