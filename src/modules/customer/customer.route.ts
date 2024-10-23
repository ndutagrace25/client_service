import express, { Router } from "express";
import { getCustomers } from "./customer.controller";

const router: Router = express.Router();

// @ts-ignore
router.get("/", getCustomers);

export default router;
