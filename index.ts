import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.set("port", process.env.PORT || 8080);

console.log('object2');
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env"),
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
