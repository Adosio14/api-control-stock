import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Categories from "../types/category";

const repository = getRepository(Categories);

export const getAllCategories = async (req: Request, res: Response) => {
  res.send("Categories");
};
export const getCategoryById = async (req: Request, res: Response) => {
  res.send("Category x by ID");
};

export const createCategory = async (req: Request, res: Response) => {
  const category = new Categories();

  category.name = req.body.name;
  try {
    await repository.save(category);
    res.status(200).send("Categoría creada");
  } catch (error) {
    res.status(404).send(error);
  }
};
