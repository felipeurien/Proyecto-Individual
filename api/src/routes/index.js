const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getVideogames } = require("../controllers/getVgInfo");
const { getGenres } = require("../controllers/genre");
const { videogamesByID } = require("../controllers/idVideogames");
const { postVideogames } = require("../controllers/postVideogames");
const { getPlatforms } = require("../controllers/platforms");

//const VideogameRoutes = require("./videogames_route");
//const GenreRoutes = require("./genres_route");

router.get("/videogames", getVideogames); //no
router.get("/genres", getGenres);
router.get("/platforms", getPlatforms);
router.get("/videogames/:id", videogamesByID);
router.get("/videogame", postVideogames); //no

module.exports = router;
