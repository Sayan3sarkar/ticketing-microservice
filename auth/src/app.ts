import express from "express";
import { authRouter } from "./routes/auth";

const app = express();
app.use(express.json());

app.use("/api/users", authRouter);

export default app;
