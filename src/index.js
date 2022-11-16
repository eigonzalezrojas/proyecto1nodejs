// console.log('Hello world');
import exp from "constants";
import express from "express";
//usamos 'join' para concatenar directorios independiente del SO
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

//importar ejs es opcional, ya que app.set reconoce automaticamente
//import ejs from 'ejs'

const app = express();
//Ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname);
//console.log(__dirname, '/views')
//console.log(join(__dirname, 'views'))

app.set("views", join(__dirname, "views"));
//engine = motor de vistas
app.set("view engine", "ejs");

app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));

app.listen(3000);
console.log("Server is listeniing on port", 3000);
