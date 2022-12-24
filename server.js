const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const canciones = require("./routes/canciones");
const html = require("./routes/showIndex");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", html);
app.use("/", canciones);
app.use("/canciones", canciones);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`servidor ejecutandose en el puerto ${PORT}`));
