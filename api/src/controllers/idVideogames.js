const axios = require("axios");
const { DB_API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

const getApiIdInfo = async (id) => {
  try {
    const apiUrl = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${DB_API_KEY}`
    );
    const apiInfo = [
      {
        name: apiUrl.data.name,
        released: apiUrl.data.released,
        rating: apiUrl.data.rating,
        id: apiUrl.data.id,
        description: apiUrl.data.description_raw,
        platforms: apiUrl.data.platforms.map((v) => v.platform.name),
        genres: apiUrl.data.genres.map((g) => g.name),
        img: apiUrl.data.background_image,
      },
    ];
    return apiInfo;
  } catch (err) {
    console.log(err);
  }
};

const getDbIdInfo = async (id) => {
  return await Videogame.findAll({
    where: {
      id: id,
    },
    include: {
      model: Genre,
      attributes: ["name"],
      throught: {
        attributes: [],
      },
    },
  });
};

async function videogamesByID(req, res) {
  try {
    const { id } = req.params;
    if (isNaN(id)) {
      const dbGame = await getDbIdInfo(id);
      if (dbGame) {
        let gameDb = await dbGame.filter(
          (e) => e.id.toString() === id.toString()
        );
        res.status(200).send(gameDb);
      }
    } else {
      const idGame = await getApiIdInfo(id);
      if (idGame) {
        let gameId = await idGame.filter(
          (e) => e.id.toString() === id.toString()
        );
        if (gameId.length > 0) res.status(200).send(gameId);
      }
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = { videogamesByID };
