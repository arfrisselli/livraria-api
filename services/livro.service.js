import LivroRepository from "../repositories/livro.repository.js"
import AutorRepository from "../repositories/autor.repository.js"
import LivroInfoRepository from "../repositories/livroInfo.repository.js"

async function createLivro(livro) {
    if (await AutorRepository.getAutor(livro.autorId)) {
        return await LivroRepository.insertLivro(livro)
    }
    throw new Error(
        "Autor não encontrado! verifique se o autor está cadastrado."
    )
}

async function updateLivro(livro) {
    return await LivroRepository.updateLivro(livro)
}

async function deleteLivro(id) {
    await LivroRepository.deleteLivro(id)
}

async function getLivros(autorId) {
    if (autorId) {
        return LivroRepository.getLivroByAutorId(autorId)
    }
    return await LivroRepository.getLivros()
}

async function getLivro(id) {
    const livro = await LivroRepository.getLivro(id)
    livro.avaliacoes = await LivroInfoRepository.getLivroInfos(parseInt(id))
    return livro
}

async function createLivroInfo(livroInfo) {
    return await LivroInfoRepository.createLivroInfo(livroInfo)
}

async function updateLivroInfo(livroInfo) {
    return await LivroInfoRepository.updateLivroInfo(livroInfo)
}

async function deleteLivroInfo(livroId) {
    await LivroInfoRepository.deleteLivroInfo(livroId)
}

async function createReview(livroId, review) {
    await LivroInfoRepository.createReview(livroId, review)
}

async function deleteReview(livroId, index) {
    await LivroInfoRepository.deleteReview(parseInt(livroId), index)
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
