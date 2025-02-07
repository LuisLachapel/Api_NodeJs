const {Database} = require("../database/index")
const {ObjectId} = require("mongodb")

COLLECTION = 'products'

const getAll = async () =>{
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) =>{
    const collection = await Database(COLLECTION);
    return collection.findOne({_id: new ObjectId(id)})
}

const insert = async(product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;

}
module.exports.ProductService = {
   getAll,
   getById,
   insert
}

