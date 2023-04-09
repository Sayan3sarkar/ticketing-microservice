import { createServer } from "http";
import { app } from "./app";
import { config } from "./config";

const { port } = config;
const server = createServer(app);

try {
  server.listen(port, () => {
    console.log(`Auth Service running on port ${port}`);
  });
} catch (err) {
  console.error(`Error starting auth service on port ${port}`);
}
