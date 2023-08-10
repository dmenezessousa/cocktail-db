import { Router } from "express";
import * as userControllers from "../controllers/userController.js";

const router = Router();


router.get("/", userControllers.getUsers);



export default router;

