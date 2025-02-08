const { Response } = require("../common/response");
const debug = require("debug")("app:module-user-controller");
const createError = require("http-errors");
const { UserServices } = require("./service");

module.exports.UserController = {
  getUsers: async (req, res) => {
    try {
      let users = await UserServices.getAll();
      Response.success(res, 200, "Listado de usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(error);
    }
  },
  getUser: async (req, res) => {
    try {
      let {
        params: { id },
      } = req;
      let user = await UserServices.getById(id);
      if (!user) {
        Response.error(res, createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario: ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(error);
    }
  },
  insertUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let insertId = await UserServices.insert(body);
        Response.success(res, 201, "Usuario insertado correctamente", insertId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
