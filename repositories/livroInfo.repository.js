import { getLivroInfo } from "./mongo.db.js"

async function createLivroInfo(livroInfo) {
    const info = getLivroInfo()
    try {
        await info.connect()
        return await info
            .db("bookStore")
            .collection("livroInfo")
            .insertOne(livroInfo)
    } catch (err) {
        throw err
    } finally {
        await info.close()
    }
}

async function updateLivroInfo(livroInfo) {
    const info = getLivroInfo()
    try {
        await info.connect()
        return await info
            .db("bookStore")
            .collection("livroInfo")
            .updateOne(
                { livroId: livroInfo.livroId },
                { $set: { ...livroInfo } }
            )
    } catch (err) {
        throw err
    } finally {
        await info.close()
    }
}

async function deleteLivroInfo(livroId) {
    const info = getLivroInfo()
    try {
        await info.connect()
        return await info
            .db("bookStore")
            .collection("livroInfo")
            .deleteOne({ livroId })
    } catch (err) {
        throw err
    } finally {
        await info.close()
    }
}

async function getLivroInfos(livroId) {
    const info = getLivroInfo()
    try {
        await info.connect()
        return await info
            .db("bookStore")
            .collection("livroInfo")
            .findOne({ livroId })
    } catch (err) {
        throw err
    } finally {
        await info.close()
    }
}

async function createReview(livroId, review) {
    try {
        const livroInfo = await getLivroInfos(livroId)
        livroInfo.avaliacoes.push(review)
        await updateLivroInfo(livroInfo)
    } catch (err) {
        throw err
    }
}

async function deleteReview(livroId, index) {
    try {
        const livroInfo = await getLivroInfos(livroId)
        livroInfo.avaliacoes.splice(index, 1)
        await updateLivroInfo(livroInfo)
    } catch (err) {
        throw err
    }
}

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    createReview,
    getLivroInfos,
    deleteReview,
}
