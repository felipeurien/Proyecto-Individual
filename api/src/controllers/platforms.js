const axios = require("axios");
const { DB_API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../db");

async function getPlatforms(req, res) {
  try {
    const apiURL = await axios.get(
      `https://api.rawg.io/api/platforms?key=${DB_API_KEY}`
    );
    const apiInfo = await apiURL.data.results.map((p) => p.name);
    apiInfo.forEach((p) => {
      Platform.findOrCreate({
        where: {
          name: p,
        },
      });
    });
    const allPlatf = await Platform.findAll();
    res.status(200).send(allPlatf);
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = { getPlatforms };
