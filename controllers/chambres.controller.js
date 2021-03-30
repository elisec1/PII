const Chambre = require("../models/chambres.model");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Créer un utilisateur
  const chambre = new Chambre({
    id_chambre: req.body.id_chambre,
    etage_chambre: req.body.etage_chambre,
    type_chambre: req.body.type_chambre,
  });

  // Save utilisateur in the database
  Chambre.create(chambre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating utilisateur.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  Chambre.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "error lors de la récupération des utilisateurs",
      });
    else res.send(data);
  });
};
