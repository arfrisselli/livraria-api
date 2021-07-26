import AutorServices from "../services/autor.service.js"

async function createAutor(req, res, next) {
    try {
        let autor = req.body
        if (!autor.nome || !autor.email || !autor.telefone) {
            throw new Error(
                "Necessário informar nome, email e telefone do autor"
            )
        }
        autor = await AutorServices.createAutor(autor)
        res.send(autor)
        global.logger.info(`POST /autor - ${JSON.stringify(autor)}`)
    } catch (err) {
        next(err)
    }
}

async function updateAutor(req, res, next) {
    try {
        let autor = req.body
        if (!autor.autorId || !autor.nome || !autor.email || !autor.telefone) {
            throw new Error(
                "Necessário informar autorId, nome email e telefone para atualizar"
            )
        }
        autor = await AutorServices.updateAutor(autor)
        res.send(autor)
        global.logger.info(`PUT /autor - ${JSON.stringify(autor)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteAutor(req, res, next) {
    try {
        await AutorServices.deleteAutor(req.params.id)
        res.send()
        global.logger.info(`DELETE /autor - ${JSON.stringify(req.params.id)}`)
    } catch (err) {
        next(err)
    }
}

async function getAutores(req, res, next) {
    try {
        res.send(await AutorServices.getAutores())
        global.logger.info(`GET /autor`)
    } catch (err) {
        next(err)
    }
}

async function getAutor(req, res, next) {
    try {
        res.send(await AutorServices.getAutor(req.params.id))
        global.logger.info(`GET /autor/${req.params.id}`)
    } catch (err) {
        next(err)
    }
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor,
}
