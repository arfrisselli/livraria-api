import LivroRepository from "../repositories/livro.repository.js";
import AutorRepository from "../repositories/autor.repository.js";

async function createLivro(livro) {
    if (await AutorRepository.getAutor(livro.autorId)) {
        return await LivroRepository.insertLivro(livro);
    }
    throw new Error("Autor não encontrado! verifique se o autor está cadastrado.");
};

async function updateLivro(livro) {
    return await LivroRepository.updateLivro(livro);
};

async function deleteLivro(id) {
    await LivroRepository.deleteLivro(id);
};

async function getLivros() {
    return await LivroRepository.getLivros();
};

async function getLivro(id) {
    return await LivroRepository.getLivro(id)
};

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivros,
    getLivro
};