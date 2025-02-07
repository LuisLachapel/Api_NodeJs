require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    mongodb_name: process.env.MONGO_DBNAME
}