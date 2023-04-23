import { ValidationError } from "express-validator";
import { errorType } from "../types/error-type";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(
    public errors: ValidationError[],
    public message = "Request Validation Error"
  ) {
    super(message);
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      const errObj: errorType = { message: error.msg };
      if (error.type === "field") {
        errObj.field = error.path;
      }
      return errObj;
    });
  }
}
