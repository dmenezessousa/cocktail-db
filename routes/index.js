import { Router } from "express";
import drinkRoutes from "./drinkRoutes.js";

const router = Router();

router.use("/drinks", drinkRoutes);

export default router;