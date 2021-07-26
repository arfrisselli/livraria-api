import mongodb from "mongodb"

function getLivroInfo() {
    const uri = ""
    return new mongodb.MongoClient(uri)
}

export { getLivroInfo }
