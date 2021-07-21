import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", ClienteController.createClient);
router.put("/", ClienteController.updateClient);
router.delete("/:id",ClienteController.deleteClient);
router.get("/", ClienteController.getClients);
router.get("/:id", ClienteController.getClient);

export default router;