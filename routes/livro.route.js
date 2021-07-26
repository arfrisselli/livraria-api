import express from "express"
import LivroController from "../controllers/livro.controller.js"

const router = express.Router()

router.post("/", LivroController.createLivro)
router.post("/info", LivroController.createLivroInfo)
router.post("/review", LivroController.createReview)
router.put("/", LivroController.updateLivro)
router.put("/info", LivroController.updateLivroInfo)
router.delete("/:id", LivroController.deleteLivro)
router.delete("/info/:id", LivroController.deleteLivroInfo)
router.delete("/:livroId/avaliacao/:index", LivroController.deleteReview)
router.get("/", LivroController.getLivros)
router.get("/:id", LivroController.getLivro)

export default router
