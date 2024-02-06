import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import DashboardController from "./controllers/DashboardController";
import ReserveController from "./controllers/ReserveController";

const routes = new Router();
const upload = multer(uploadConfig);

// Rotas de Sessão
routes.post("/sessions", SessionController.store);

// Rotas de Casas
routes.post("/houses", upload.single("thumbnail"), HouseController.store);
routes.get("/houses", HouseController.index);
routes.put(
  "/houses/:houseId",
  upload.single("thumbnail"),
  HouseController.update
);
routes.delete("/houses/:houseId", HouseController.destroy);

// Rota do Dashboard
routes.get("/dashboard", DashboardController.show);

// Rota de Reserva
routes.post("/houses/:houseId/reserve", ReserveController.store);
routes.get("/reserves", ReserveController.index);
routes.delete("/reserves/cancel", ReserveController.destroy);

export default routes;
