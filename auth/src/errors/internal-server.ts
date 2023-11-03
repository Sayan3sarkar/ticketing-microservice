import { BaseError } from "./base-error";

export class InternalServerError extends BaseError {
  statusCode = 500;

  constructor(message?: string) {
    super(message || "Something Went Wrong!!");

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: "Something Went Wrong!!" }];
  }
}
