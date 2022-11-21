const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getVideogames } = require("../controllers/getVgInfo");
const { getGenres } = require("../controllers/genre");
const { getPlatforms } = require("../controllers/platforms");
const { videogamesByID } = require("../controllers/idVideogames");
const { postVideogames } = require("../controllers/postVideogames");

//const VideogameRoutes = require("./videogames_route");
//const GenreRoutes = require("./genres_route");

router.get("/videogames", getVideogames);
router.get("/genres", getGenres);
router.get("/platforms", getPlatforms);
router.get("/videogames/:id", videogamesByID);
router.post("/videogame", postVideogames); //no

module.exports = router;
