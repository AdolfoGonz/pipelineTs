import Server from "./provider/Server";
import { PORT, NODE_ENV } from "./config";
import express from "express";
import cors from "cors";
import MascotaController from "./controllers/MascotaController";
import ProductoMascotaController from "./controllers/ProductoMascotaController";

const server = new Server({
  port: PORT,
  env: NODE_ENV,
  middlewares: [express.json(), express.urlencoded({ extended: true }), cors()],
  controllers: [MascotaController.instance, ProductoMascotaController.instance],
});

server.init();
