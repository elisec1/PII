module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    id_cli: {
      type: Sequelize.INTEGER,
    },
    nom_cli: {
      type: Sequelize.STRING,
    },
    prenom_cli: {
      type: Sequelize.STRING,
    },
  });

  return Client;
};
