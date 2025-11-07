import express from "express";
import cors from "cors";
import routesController from "../adapters/inbound/http/routes.controller.ts";
import complianceController from "../adapters/inbound/http/compliance.controller.ts";
import bankingController from "../adapters/inbound/http/banking.controller.ts";
import poolController from "../adapters/inbound/http/pool.controller.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/routes", routesController);
app.use("/compliance", complianceController);
app.use("/banking", bankingController);
app.use("/pools", poolController);

export default app;
