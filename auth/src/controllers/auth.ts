import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { BadRequestError } from "../errors";

export const signupController = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new BadRequestError(errors.array());
  }

  const { email, password } = req.body;

  res.sendStatus(200);
};
