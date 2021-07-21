import mongodb from "mongodb";

function getClient() {
    const uri = "mongodb+srv://leonardocastro:Leo443671424@desafiofinal.hncrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    return new mongodb.MongoClient(uri);
}

export { getClient };