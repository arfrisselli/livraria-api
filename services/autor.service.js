import AutorRepository from "../repositories/autor.repository.js"
import LivroRepository from "../repositories/livro.repository.js"

async function createAutor(autor) {
    return await AutorRepository.insertAutor(autor)
}

async function updateAutor(autor) {
    return await AutorRepository.updateAutor(autor)
}

async function deleteAutor(id) {
    const livros = await LivroRepository.getLivroByAutorId(id)
    if (livros.length > 0) {
        throw new Error(
            "Não é possível deletar esse autor pois o mesmo tem um livro"
        )
    }
    await AutorRepository.deleteAutor(id)
}

async function getAutores() {
    return await AutorRepository.getAutores()
}

async function getAutor(id) {
    return await AutorRepository.getAutor(id)
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor,
}
