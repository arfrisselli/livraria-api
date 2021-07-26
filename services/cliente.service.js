import ClienteRepository from "../repositories/cliente.repository.js"

async function createClient(cliente) {
    return await ClienteRepository.insertClient(cliente)
}

async function updateClient(client) {
    return await ClienteRepository.updateClient(client)
}

async function deleteClient(id) {
    await ClienteRepository.deleteClient(id)
}

async function getClients() {
    return await ClienteRepository.getClients()
}

async function getClient(id) {
    return await ClienteRepository.getClient(id)
}

export default {
    createClient,
    updateClient,
    deleteClient,
    getClients,
    getClient,
}
