const express = require("express");
const { agregapost, listapost } = require("./consultas");
const cors = require("cors"); // Llamo o requiero cors
const app = express();

app.use(express.json()); // Midelware permite que las peticiopnes se manejen en formato Json

app.use(cors()); // Acá lo llamo para ser usado y permita la comunicación de requerimientos entre módulos
app.listen(3000, console.log("Servidor Escuchando..."));

app.post("/posts", async (req, res) => {
  const { titulo, imgSrc, descripcion, likes } = req.body;
  await agregapost(titulo, imgSrc, descripcion);
  res.send("post Agregado via API/REST");
});

app.get("/posts", async (req, res) => {
  const lospost = await listapost();
  res.json(lospost);
  console.log(lospost);
});