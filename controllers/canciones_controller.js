const fs = require("fs");

exports.createSong = (req, res) => {
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("./data/canciones.json"));
  canciones.push(cancion);
  fs.writeFileSync("./data/canciones.json", JSON.stringify(canciones));
  return res.send("canción creada");
};

exports.getSongs = (req, res) => {
  const canciones = fs.readFileSync("./data/canciones.json");
  const data = JSON.parse(canciones);
  return res.json(data);
};

exports.updateSong = (req, res) => {
    const { id } = req.params;
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("./data/canciones.json"));
    const index = canciones.findIndex((p) => p.id == id);
    canciones[index] = cancion;
    fs.writeFileSync("./data/canciones.json", JSON.stringify(canciones));
    return res.send("Canción modificada con éxito");
}

exports.deleteSong = (req, res) => {
    const { id } = req.params;
    const canciones = JSON.parse(fs.readFileSync("./data/canciones.json"));
    const cancion = canciones.findIndex((p) => p.id == id);
    canciones.splice(cancion,1);
    fs.writeFileSync("./data/canciones.json", JSON.stringify(canciones));
    return res.send("canción eliminada");
};
