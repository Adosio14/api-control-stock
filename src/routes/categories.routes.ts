import { Router } from "express";
import { CategoriesControllers } from "../controllers";

export const categoriesRoutes = Router();

categoriesRoutes.get("/", CategoriesControllers.getAllCategories);
