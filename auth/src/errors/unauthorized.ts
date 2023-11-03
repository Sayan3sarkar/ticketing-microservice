import { BaseError } from "./base-error";

export class UnauthorizedError extends BaseError {
  statusCode = 403;

  constructor(message?: string) {
    super(message || "Unauthorized Operation");

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Unauthorized Operation" }];
  }
}
