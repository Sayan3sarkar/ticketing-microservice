import { BaseError } from "./base-error";

export class NotFoundError extends BaseError {
  statusCode = 404;

  constructor(message?: string) {
    super(message || "Resource not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Resource Not Found" }];
  }
}
