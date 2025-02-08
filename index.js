const express = require('express');
const debug = require('debug')('app:main');
const {Config} = require('./src/config/index');
const {ProductsAPI} = require('./src/products/index')
const {UserApi} = require('./src/users')

const app = express();
app.use(express.json())

ProductsAPI(app);
UserApi(app);

app.listen(Config.port,() =>{
    debug(`Servidor ejecutandose en el puerto ${Config.port}`)
})