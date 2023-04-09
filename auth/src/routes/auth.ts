import { Router } from "express";
import { fetchCurrentUser } from "../controllers/auth";

const router = Router();

router.get("/current-user", fetchCurrentUser);

export { router };
