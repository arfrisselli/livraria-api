import ClienteService from "../services/cliente.service.js";

async function createClient(req, res, next) {
    try {
        let client = req.body;
        if (!client.nome || !client.email || !client.senha || !client.telefone || !client.endereco) {
            throw new Error("Nome, email, senha, telefone, endereço dever ser preenchidos");
        }
        client = await ClienteService.createClient(client);
        res.send(client);
        global.logger.info(`POST /cliente - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
};

async function updateClient(req, res, next) {
    try {
        let client = req.body;
        if(!client.clienteId || !client.nome || !client.email || !client.senha || !client.telefone || !client.endereco) {
            throw new Error("clienteId, Nome, email, senha, telefone e endereço são necessários!");
        }
        client = await ClienteService.updateClient(client);
        res.send(client);
        global.logger.info(`PUT /cliente - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
};

async function deleteClient(req, res, next) {
    try {
        await ClienteService.deleteClient(req.params.id);
        res.end();
        global.logger.info(`Delete /cliente/${req.params.id}`);
    } catch (err) {
        next(err);
    }    
};

async function getClients(req, res, next) {
    try {
        res.send(await ClienteService.getClients());
        global.logger.info(`GET /cliente`);
    } catch(err) {
        next(err);
    }
}

async function getClient(req, res, next) {
    try {
        res.send(await ClienteService.getClient(req.params.id))
        global.logger.info(`GET /cliente/${req.params.id}`);
    } catch (err) {
        next(err);
    }
};

export default {
    createClient,
    updateClient,
    deleteClient,
    getClients,
    getClient
}