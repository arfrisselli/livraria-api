import Livros from "../models/livro.model.js";
import Autores from "../models/autor.model.js";

async function insertLivro(livro) {
  try {
    return await Livros.create(livro);
  } catch (err) {
    throw err;
  }
}

async function updateLivro(livro) {
  try {
    await Livros.update(
      {
        valor: livro.valor,
        estoque: livro.estoque,
      },
      {
        where: {
          livroId: livro.livroId,
        },
      }
    );
    //return await getLivro(livro.livroId);
  } catch (err) {
    throw err;
  }
}

async function deleteLivro(id) {
  try {
    await Livros.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getLivros() {
  try {
    return await Livros.findAll();
  } catch (err) {
    throw err;
  }
}

async function getLivro(id) {
  try {
    return await Livros.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getLivroByAutorId(autorId) {
  try {
    return await Livros.findAll({
      include: [
        {
          model: Autores,
          where: {
            autorId: autorId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro,
  getLivroByAutorId,
};
