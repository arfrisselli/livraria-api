import VendaRepository from "../repositories/venda.repository.js"
import ClienteRepository from "../repositories/cliente.repository.js"
import LivroRepository from "../repositories/livro.repository.js"

async function createVenda(venda) {
    let error = ""
    if (!(await ClienteRepository.getClient(venda.clienteId))) {
        error = "O ClienteId informado não existe \n"
    }
    const livro = await LivroRepository.getLivro(venda.livroId)
    if (!livro) {
        error += "O livroId informado não existe"
    }
    if (error) {
        throw new Error(error)
    }

    if (livro.estoque > 0) {
        venda = await VendaRepository.insertSale(venda)
        livro.estoque--
        await LivroRepository.updateLivro(livro)
        return venda
    } else {
        throw new Error("O Livro informado não possui estoque.")
    }
}

async function getVenda(id) {
    return await VendaRepository.getSale(id)
}

async function getVendas(clienteId, livroId, autorId) {
    if (clienteId) {
        return await VendaRepository.getSalesByClientId(clienteId)
    }
    if (livroId) {
        return await VendaRepository.getSalesByBookId(livroId)
    }
    if (autorId) {
        return await VendaRepository.getSalesByAuthorId(autorId)
    }
    return await VendaRepository.getSales()
}

export default {
    createVenda,
    getVenda,
    getVendas,
}
