import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
    try {
        let livro = req.body;
        if(!livro.nome || !livro.valor || !livro.estoque || !livro.autorId){
            throw new Error("Nome, valor, estoque e autorId são necessários para a criação de um registro.");
        }
        livro = await LivroService.createLivro(livro);
        res.send(livro);
        global.logger.info(`POST /livro - ${JSON.stringify(livro)}`);
    } catch (err) {
        next(err);
    };
};

async function updateLivro(req, res, next) {
    try {
        let livro = req.body;
        const erro = [];
        if(!livro.livroId || !livro.valor || !livro.estoque ) { 
            erro.push('livroId, valor e estoque são necessários')
            throw new Error(erro);
        }else if ( livro.nome || livro.autorId){
            erro.push('Nome e autorId não podem ser alterados');
            throw new Error(erro);
        }
        livro = await LivroService.updateLivro(livro);
        res.send(livro);
        global.logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    } catch(err) {
        next(err);
    }
};

async function deleteLivro(req, res, next) {
    try {
        await LivroService.deleteLivro(req.params.id);
        res.end();
        global.logger.info(`DELETE /livro/${req.params.id}`);
    } catch(err) {
        next(err);
    }
};

async function getLivros(req, res, next) {
    try {
        res.send(await LivroService.getLivros());
        global.logger.info(`GET /livro`);
    } catch(err) {
        next(err);
    };
};

async function getLivro(req, res, next) {
    try {
        res.send(await LivroService.getLivro(req.params.id));
        global.logger.info(`GET /livro/${req.params.id}`);
    } catch(err) {
        next(err);
    };
};

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivros,
    getLivro
}