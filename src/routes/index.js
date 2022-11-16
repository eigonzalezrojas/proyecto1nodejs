//si queremos separar una porción de una aplicación, usaremos router
import { Router } from "express";

const router = Router();

//peticiones al servidor, solicitar datos al servidor (peticiones = get)
router.get("/", (req, res) => res.render("index", {title: "Primer sitio en Node", x: 30 }));
router.get("/about", (req, res) => res.render("about"));
router.get("/contact", (req, res) => res.render("contact"));

//Para unir estas funciones exportaremos

export default router;
