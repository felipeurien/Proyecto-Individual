const axios = require("axios");
const { DB_API_KEY } = process.env;
const { Genre } = require("../db");

async function getGenres(req, res) {
  try {
    const genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${DB_API_KEY}`
    );
    const genres = genresApi.data.results.map((g) => g.name);
    genres.forEach((g) => {
      Genre.findOrCreate({
        where: {
          name: g,
        },
      });
    });
    const allGenres = await Genre.findAll();
    res.send(allGenres);
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = { getGenres };
