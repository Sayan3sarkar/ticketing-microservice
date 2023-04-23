import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation";
import { BadRequestError } from "../errors/bad-request-error";
import { UnauthenticatedError } from "../errors/unauthenticated-error";
import { UnauthorizedError } from "../errors/unauthorized-error";
import { NotFoundError } from "../errors/not-found-error";
import { InternalServerError } from "../errors/internal-server-error";

export const fetchCurrentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Hi there");
};

export const signInUser = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hi there");
};

export const signUpUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    throw new InternalServerError("abcd");
    res.send("Hi there");
  } catch (err) {
    next(err);
  }
};

export const signOutUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Hi there");
};
