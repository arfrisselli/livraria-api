import LivroService from "../services/livro.service.js"

async function createLivro(req, res, next) {
    try {
        let livro = req.body
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
            throw new Error(
                "Nome, valor, estoque e autorId são necessários para a criação de um registro."
            )
        }
        livro = await LivroService.createLivro(livro)
        res.send(livro)
        global.logger.info(`POST /livro - ${JSON.stringify(livro)}`)
    } catch (err) {
        next(err)
    }
}

async function updateLivro(req, res, next) {
    try {
        let livro = req.body
        const erro = []
        if (!livro.livroId || !livro.valor || !livro.estoque) {
            erro.push("livroId, valor e estoque são necessários")
            throw new Error(erro)
        } else if (livro.nome || livro.autorId) {
            erro.push("Nome e autorId não podem ser alterados")
            throw new Error(erro)
        }
        livro = await LivroService.updateLivro(livro)
        res.send(livro)
        global.logger.info(`PUT /livro - ${JSON.stringify(livro)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteLivro(req, res, next) {
    try {
        await LivroService.deleteLivro(req.params.id)
        res.end()
        global.logger.info(`DELETE /livro/${req.params.id}`)
    } catch (err) {
        next(err)
    }
}

async function getLivros(req, res, next) {
    try {
        res.send(await LivroService.getLivros(req.query.autorId))
        global.logger.info(`GET /livro`)
    } catch (err) {
        next(err)
    }
}

async function getLivro(req, res, next) {
    try {
        res.send(await LivroService.getLivro(req.params.id))
        global.logger.info(`GET /livro/${req.params.id}`)
    } catch (err) {
        next(err)
    }
}

async function createLivroInfo(req, res, next) {
    try {
        let livroInfo = req.body
        await LivroService.getLivro(livroInfo.livroId)
        if (!livroInfo.livroId) {
            throw new Error("livroId é um campo obrigatório.")
        }
        res.send(await LivroService.createLivroInfo(livroInfo))
        global.logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`)
    } catch (err) {
        next(err)
    }
}

async function updateLivroInfo(req, res, next) {
    try {
        let livroInfo = req.body
        if (!livroInfo.livroId) {
            throw new Error("livroId é um campo obrigatório.")
        }
        res.send(await LivroService.updateLivroInfo(livroInfo))
        global.logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteLivroInfo(req, res, next) {
    try {
        res.send(await LivroService.deleteLivroInfo(parseInt(req.params.id)))
        global.logger.info(`DELETE /livro/info/${req.params.id}`)
    } catch (err) {
        next(err)
    }
}

async function createReview(req, res, next) {
    try {
        let params = req.body
        if (!params.livroId || !params.avaliacoes) {
            throw new Error("livroId e avaliacoes são obrigatórios!")
        }
        await LivroService.createReview(params.livroId, params.avaliacoes)
        global.logger.info(
            `POST /livro/review - ${(params.livroId, params.avaliacoes)}`
        )
        res.end()
    } catch (err) {
        next(err)
    }
}

async function deleteReview(req, res, next) {
    try {
        await LivroService.deleteReview(req.params.livroId, req.params.index)
        global.logger.info(
            `DELETE /livro/${req.params.livroId}/review/${req.params.index}`
        )
        res.end()
    } catch (err) {
        next(err)
    }
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivros,
    getLivro,
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createReview,
    deleteReview,
}
