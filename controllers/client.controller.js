import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.nome ||
      !client.email ||
      !client.senha ||
      !client.telefone ||
      !client.endereco
    ) {
      throw new Error(
        "Nome, email, senha, telefone, endereço devem ser preenchidos"
      );
    }
    client = await ClientService.createClient(client);
    res.send(client);
    global.logger.info(`POST /cliente - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default { createClient };
