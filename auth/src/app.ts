import express from "express";
import { router as authRoutes } from "./routes/auth";

const app = express();
app.use(express.json());

app.use("/api/users", authRoutes);

export { app };
