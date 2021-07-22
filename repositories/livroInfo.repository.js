import { getClient } from "./mongo.db.js";

async function createLivroInfo(livroInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("desafio").collection("livroInfo").insertOne(livroInfo);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function updateLivroInfo(livroInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("desafio")
      .collection("livroInfo")
      .updateOne({ livroId: livroInfo.livroId }, { $set: { ...livroInfo } });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  createLivroInfo,
  updateLivroInfo,
};
