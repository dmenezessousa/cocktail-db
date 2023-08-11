import { Router } from "express";
import restrict from "../middleware/restrict.js";
import * as drinkControllers from "../controllers/drinksController.js";

const router = Router();

router.get("/", drinkControllers.getDrinks);
router.get("/:id", drinkControllers.getDrink);
router.post("/create-drink", restrict, drinkControllers.createDrink);
router.put("/:id", restrict, drinkControllers.updateDrink);
router.delete("/:id", restrict, drinkControllers.deleteDrink);

export default router;
