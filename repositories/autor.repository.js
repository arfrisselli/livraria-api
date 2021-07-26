import Autores from "../models/autor.model.js"

async function insertAutor(autor) {
    try {
        return await Autores.create(autor)
    } catch (err) {
        throw err
    }
}

async function updateAutor(autor) {
    try {
        await Autores.update(autor, {
            where: {
                autorId: autor.autorId,
            },
        })
        return await getAutor(autor.autorId)
    } catch (err) {
        throw err
    }
}

async function deleteAutor(id) {
    try {
        await Autores.destroy({
            where: {
                autorId: id,
            },
        })
    } catch (err) {
        throw err
    }
}

async function getAutores() {
    try {
        return await Autores.findAll()
    } catch (err) {
        throw err
    }
}

async function getAutor(id) {
    try {
        return await Autores.findByPk(id)
    } catch (err) {
        throw err
    }
}

export default {
    insertAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor,
}
