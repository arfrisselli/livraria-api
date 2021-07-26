import Venda from "../models/venda.model.js"
import Livro from "../models/livro.model.js"
import Cliente from "../models/cliente.model.js"
import Livros from "./livro.repository.js"

async function insertSale(venda) {
    try {
        return await Venda.create(venda)
    } catch (err) {
        throw err
    }
}

async function getSale(id) {
    try {
        return await Venda.findByPk(id)
    } catch (err) {
        throw err
    }
}

async function getSales() {
    try {
        return await Venda.findAll()
    } catch (err) {
        throw err
    }
}

async function getSalesByClientId(clienteId) {
    try {
        return await Venda.findAll({
            include: [
                {
                    model: Cliente,
                    where: {
                        clienteId: clienteId,
                    },
                },
            ],
        })
    } catch (err) {
        throw err
    }
}

async function getSalesByBookId(livroId) {
    try {
        return await Venda.findAll({
            include: [
                {
                    model: Livro,
                    where: {
                        livroId: livroId,
                    },
                },
            ],
        })
    } catch (err) {
        throw err
    }
}

async function getSalesByAuthorId(autorId) {
    try {
        return await Venda.findAll({
            include: [
                {
                    model: Livro,
                    where: {
                        autorId: autorId,
                    },
                },
            ],
        })
    } catch (err) {
        throw err
    }
}

export default {
    insertSale,
    getSale,
    getSales,
    getSalesByClientId,
    getSalesByBookId,
    getSalesByAuthorId,
}
