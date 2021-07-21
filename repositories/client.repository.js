import Clientes from "../models/client.model.js";

async function createClient(client) {
  try {
    return await Clientes.create(client);
  } catch (err) {
    throw err;
  }
}

export default { createClient };
