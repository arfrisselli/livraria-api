import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createLivro);
router.post("/info", LivroController.createLivroInfo);
router.put("/", LivroController.updateLivro);
router.put("/info", LivroController.updateLivroInfo);
router.delete("/:id", LivroController.deleteLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivro);

export default router;
