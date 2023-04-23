import { CustomError } from "./custom-error";

export class UnauthenticatedError extends CustomError {
  statusCode = 401;

  constructor(public message = "Unauthenticated") {
    super(message);
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
