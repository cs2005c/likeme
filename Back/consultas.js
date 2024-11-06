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
  console.log(result.rows);
  return result.rows; // Retorna las filas resultantes de la consulta.
};

const leepostindividual = async (id) => {
  const consulta = "Select * from post where id = $1";
  const value = [id];
  const result = await pool.query(consulta, value);
  console.log(resul);
};

const modificapost = async (presupuesto, id) => {
  const consulta = "UPDATE post  set prespuesto = $1 Where id = $2 ";
  const values = [presupuesto, id];
  const result = await pool.query(consulta, values);
};

// Exporta las ArrowFunction para ser usadas en otros modulos
module.exports = {
  agregapost,
  leepostindividual,
  listapost,
  modificapost,
};
