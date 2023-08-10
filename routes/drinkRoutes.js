import { Router } from "express";
import * as drinkControllers from "../controllers/drinksController.js";


const router = Router();

router.get("/", drinkControllers.getDrinks);


export default router;

