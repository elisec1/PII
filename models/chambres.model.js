const sql = require("../db.js");

// constructeur

const Chambre = function (chambre) {
  (this.id_chambre = chambre.id_chambre),
    (this.etage_chambre = chambre.etage_chambre),
    (this.type_chambre = chambre.type_chambre);
};

Chambre.create = (newChambre, result) => {
  sql.query("INSERT INTO Chambres SET ?", newChambre, (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(err, null);
      return;
    }

    console.log("chambre créé : ", {
      id_chambre: newChambre.id_chambre,
      ...newChambre,
    });
  });
};

Chambre.getAll = (result) => {
  sql.query("SELECT * FROM Chambres", (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(err, null);
      return;
    }

    console.log("Chambres:", res);
    result(null, res);
    return;
  });
};

Chambre.findById = (id, result) => {
  sql.query("SELECT * FROM Chambre WHERE id_chambre = ?", id, (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found utilisateur", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Chambre;
