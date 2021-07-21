import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", LivroController.createLivro);
router.put("/", LivroController.updateLivro);
router.delete("/:id", LivroController.deleteLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivro);

export default router;