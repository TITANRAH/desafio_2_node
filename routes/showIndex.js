const express = require("express");
const ruta = express.Router();

const { controlador } = require("../controllers/showIndex_controller.js");

ruta.route('/').get(controlador.show)

module.exports = ruta;