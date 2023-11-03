import { ValidationError } from "express-validator";
import { BaseError } from "./base-error";
import { errorType } from "../types/error-type";

export class BadRequestError extends BaseError {
  statusCode = 400;

  constructor(private errors: ValidationError[], message?: string) {
    super(message || "Invalid Request");

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): errorType[] {
    return this.errors.map((err) => {
      const finalErr: errorType = { message: err.msg };

      if (err.type === "field") {
        finalErr.field = err.path;
      }

      return finalErr;
    });
  }
}
