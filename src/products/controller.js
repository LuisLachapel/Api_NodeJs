const { ProductService } = require("./service");
const { Response } = require("../common/response");
const debug = require("debug")("app:module-products-controller");
const createError = require("http-errors");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductService.getAll();
      Response.success(res, 200, "Listado de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProductsById: async (req, res) => {
    try {
      let {
        params: { id },
      } = req;
      let product = await ProductService.getById(id);
      if (!product) {
        Response.error(res, new createError.NotFound());
      }
      else{
          Response.success(res, 200, `Producto: ${id}`, product);
      }
      
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  insertProducts: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertId = await ProductService.insert(body);
        Response.success(
          res,
          201,
          "Producto insertado correctamente",
          insertId
        );
      }
    } catch (error) {
      debug(error);
      Response.error(res)
    }
  },
};
