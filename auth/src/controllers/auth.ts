import { Request, Response, NextFunction } from "express";

export const fetchCurrentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Hi there");
};
