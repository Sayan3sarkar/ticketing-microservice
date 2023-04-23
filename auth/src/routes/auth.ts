import { Router } from "express";
import {
  fetchCurrentUser,
  signInUser,
  signOutUser,
  signUpUser,
} from "../controllers/auth";
import { body } from "express-validator";

const router = Router();

router.get("/current-user", fetchCurrentUser);
router.post("/signin", signInUser);
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  signUpUser
);
router.post("/signout", signOutUser);

export { router as authRoutes };
