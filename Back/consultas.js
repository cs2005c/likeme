const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "likeme",
  allowExitOnIdle: true,
});

const agregapost = async (titulo, imgSrc, descripcion) => {
  const consulta =
    "INSERT INTO post (titulo, img, descripcion) VALUES ($1, $2, $3)";

  const values = [titulo, imgSrc, descripcion]; // se hace la destructuracion
  const result = await pool.query(consulta, values);

  console.log("post Agregado Correctamente", result.rowCount);
};

const listapost = async () => {
  const result = await pool.query("Select * from post");
  //console.log(result.rows);
  return result.rows; // Retorna las filas resultantes de la consulta.
};

const leepostindividual = async (id) => {
  const consulta = "Select * from post where id = $1";
  const value = [id];
  const result = await pool.query(consulta, value);
  console.log(resul);
};

const modificapost = async (id) => {
  const consulta =
    "UPDATE post  set likes = COALESCE(likes, 0) + 1 Where id = $1 ";
  // const values = [likes, id];
  const values = [id];
  const result = await pool.query(consulta, values);
};

const eliminapost = async (id) => {
  const consulta = "DELETE FROM post WHERE id = $1";
  console.log(id);
  const values = [id];
  const result = await pool.query(consulta, values);
  console.log("Paso Por acá");
};

// Exporta las ArrowFunction para ser usadas en otros modulos
module.exports = {
  agregapost,
  leepostindividual,
  listapost,
  modificapost,
  eliminapost,
};
