import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import v1Route from "./route/v1/route";
import express, { Request, Response } from "express";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false, // handled by sveltekit
  })
);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/v1", v1Route);

export default app;
