import express from "express"
import * as userController from "../controllers/userController.js";
const router = express.Router();

router.post("/create", userController.createUser);
router.get("/getAll", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

export default router;