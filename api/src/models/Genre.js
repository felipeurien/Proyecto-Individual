// no paso id xq lo hace solo
const { DataTypes } = require("sequelize");
//conecto a sequelize y lo defino
module.exports = (sequelize) => {
  sequelize.define("genre", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
