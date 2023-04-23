import express from "express";
import { authRoutes } from "./routes/auth";
import { errorHandler } from "./middleware/error-handler";

const app = express();
app.use(express.json());

app.use("/api/users", authRoutes);
app.use(errorHandler);

export { app };
