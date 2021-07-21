import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
  return await ClientRepository.createClient(client);
}

export default { createClient };
