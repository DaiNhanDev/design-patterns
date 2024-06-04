import express, { Express } from "express";
import dotenv from "dotenv";
import { buy } from './Structural/facade';
dotenv.config();

const app: Express = express();
app.set("port", process.env.PORT || 8080);


buy(140000);
export default app;
