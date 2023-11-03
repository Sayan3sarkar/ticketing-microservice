import { BaseError } from "./base-error";

export class UnauthenticatedError extends BaseError {
  statusCode = 401;

  constructor(message?: string) {
    super(message || "Unauthenticated");

    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Unauthenticated" }];
  }
}
