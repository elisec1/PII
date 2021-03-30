module.exports = (app) => {
  const chambre = require("../controllers/chambres.controller");

  app.post("/chambre", chambre.create);

  app.get("/chambre", chambre.getAll);
};
