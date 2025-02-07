const { MongoClient, ServerApiVersion } = require('mongodb');
const debug = require('debug')('app:module-database');
const { Config } = require('../config/index');

var connection = null;

module.exports.Database = (collection) => 
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongo_uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });

        connection = await client.connect();
        debug("Nueva conexión realizada con éxito");
      }

      debug("Reutilizando conexión");
      const db = connection.db(Config.mongodb_name);
      resolve(db.collection(collection));
    } catch (error) {
      debug(`Error de conexión con MongoDB: ${error.message}`);
      reject(error);
    }
  });
