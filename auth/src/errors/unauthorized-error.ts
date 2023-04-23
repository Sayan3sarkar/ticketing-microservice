import { CustomError } from "./custom-error";

export class UnauthorizedError extends CustomError {
  statusCode = 403;

  constructor(public message = "Unauthorized") {
    super(message);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
