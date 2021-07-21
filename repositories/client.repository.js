import Client from "../models/client.model.js";

async function createClient(client) {
  try {
    return await Client.create(client);
  } catch (err) {
    throw err;
  }
}

export default { createClient };
