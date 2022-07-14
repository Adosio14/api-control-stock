import { Router } from "express";
import { CategoriesControllers } from "../controllers";

export const categoriesRoutes = Router();

categoriesRoutes.get("/", CategoriesControllers.getAllCategories);
categoriesRoutes.get("/:id", CategoriesControllers.getCategoryById);
categoriesRoutes.post("/", CategoriesControllers.createCategory);
