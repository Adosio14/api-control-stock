import { Request, Response } from "express";

export const getAllCategories = async (req: Request, res: Response) => {
  res.send("Categories");
};
