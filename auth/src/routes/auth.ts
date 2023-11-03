import { Router } from "express";
import { body } from "express-validator";
import { signupController } from "../controllers/auth";

const router = Router();

router.get("/current-user", (req, res) => {
  res.send("Hi there!");
});

router.post("/signin", (req, res) => {
  res.send("Hi there!");
});

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  signupController
);

router.post("/logout", (req, res) => {
  res.send("Hi there!");
});

export { router as authRouter };
