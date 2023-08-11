import { Router } from "express";
import restrict from "../middleware/restrict.js";
import * as drinkControllers from "../controllers/drinksController.js";

const router = Router();

router.get("/", drinkControllers.getDrinks);
router.get("/favorites", restrict, drinkControllers.getFavoriteCocktails);
router.get("/:id", drinkControllers.getDrink);
router.post("/create-drink", restrict, drinkControllers.createDrink);
router.post("/favorites", restrict, drinkControllers.addCocktailToFavorites);
router.put("/:id", restrict, drinkControllers.updateDrink);
router.delete("/:id", restrict, drinkControllers.deleteDrink);
router.delete(
  "/favorites/:id",
  restrict,
  drinkControllers.deleteCocktailFromFavorites
);

export default router;
