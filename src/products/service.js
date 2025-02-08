const {Database} = require("../database/index")
const {ObjectId} = require("mongodb")
const {Products_Utils} = require("./utils")

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

const generateReport = async (name, res) =>{
    let products = await getAll();
    Products_Utils.excelGenerator(products,name, res);
}


module.exports.ProductService = {
   getAll,
   getById,
   insert,
   generateReport
}

