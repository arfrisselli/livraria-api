import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://dbMaster:ketkyy3HrNPv@cluster0.vdp8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
