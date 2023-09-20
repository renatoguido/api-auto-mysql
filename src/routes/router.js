import express from "express";
import autoMobileController from "../controllers/AutoMobileController.js";

const router = express.Router();

router.post("/automobille", autoMobileController.create);
router.get("/automobille", autoMobileController.getAll);
router.get("/automobille/:id", autoMobileController.getById);
router.put("/automobille/:id", autoMobileController.update);
router.delete("/automobille/:id", autoMobileController.delete);

export default router;