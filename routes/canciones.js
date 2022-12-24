const express = require("express");
const ruta = express.Router();

const { createSong, getSongs, deleteSong, updateSong } = require("../controllers/canciones_controller");

ruta.route('/canciones')
    .post(createSong)
    .get(getSongs);

ruta.route('/:id')
    .delete(deleteSong)
    .put(updateSong)

module.exports = ruta;