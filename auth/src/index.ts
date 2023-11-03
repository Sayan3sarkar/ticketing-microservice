import app from "./app";
import { createServer } from "http";
import { config } from "./config";

const server = createServer(app);

const main = () => {
  try {
    server.listen(config.port, () => {
      console.log(`Auth service running on port: ${config.port}!!`);
    });
  } catch (err) {
    console.log(`Error in starting Auth service on port: ${config.port}`);
  }
};

main();
