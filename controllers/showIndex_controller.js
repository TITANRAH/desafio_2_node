var path = require('path')

exports.controlador = {
  show: (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
  }
};

