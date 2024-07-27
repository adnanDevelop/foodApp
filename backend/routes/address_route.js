import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddress,
} from "../controllers/address_controller.js";

const router = Router();

router.post("/create-address", verifyToken, createAddress);
router.put("/update-address", verifyToken, updateAddress);
router.delete("/delete-address", verifyToken, deleteAddress);
router.get("/get-address", verifyToken, getAddress);

export default router;
