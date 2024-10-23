import express, { Application, Request, Response, NextFunction } from "express";
// @ts-ignore
import cors from "cors";
import { customer } from "./routes";

const app: Application = express();

// Set up CORS with specific origin
app.use(cors());

// Your existing routes and middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT, PATCH"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/customer", customer);

export default app;
