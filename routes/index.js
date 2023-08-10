import { Router } from "express";
import drinkRoutes from "./drinkRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/drinks", drinkRoutes);
router.use("/users", userRoutes);

export default router;