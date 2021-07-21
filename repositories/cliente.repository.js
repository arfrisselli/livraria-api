import Clientes from "../models/cliente.model.js";

async function insertClient(cliente) {
    try {
        return await Clientes.create(cliente);
    } catch (err) {
        throw err;
    };
};

async function updateClient(client) {
    try {
        await Clientes.update(client, {
            where: {
                clienteId: client.clienteId
            }
        });
       return await getClient(client.clienteId);
    } catch (err) {
        throw err;
    };
};

async function deleteClient(id) {
    try {
        await Clientes.destroy({
            where: {
                clienteId: id
            }
        });
    } catch (err) {
        throw err;
    };
};

async function getClients() {
    try {
        return await Clientes.findAll();
    } catch(err) {
        throw err;
    };
};

async function getClient(id) {
    try {
        return await Clientes.findByPk(id);
    } catch (err) {
        throw err;
    };
};


export default {
    insertClient,
    updateClient,
    deleteClient,
    getClients,
    getClient
}