import express from "express";
import cors from "cors";
import routesController from "../adapters/inbound/http/routes.controller";
import complianceController from "../adapters/inbound/http/compliance.controller";
import bankingController from "../adapters/inbound/http/banking.controller";
import poolController from "../adapters/inbound/http/pool.controller";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/routes", routesController);
app.use("/compliance", complianceController);
app.use("/banking", bankingController);
app.use("/pools", poolController);

export default app;
