const { Router } = require("express");
const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Iscritto = mongoose.model("iscrittoModel");

router.get("/", (req, res) => {
  res.render("addupdateiscritti", {
    viewTitle: "Inserisci un iscritto",
  });
});

/** Richiamo con il metodo post una funzione di salvataggio (CREATE) oppure di modifica (UPDATE) */
router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  //creo un collegamento con lo schema di mongoose
  let iscritto = new Iscritto();
  iscritto.nome = req.body.nome;
  iscritto.cognome = req.body.cognome;
  iscritto.anni = req.body.anni;
  iscritto.matricola = req.body.matricola;
  //salvo i dati dall'oggetto iscritto
  iscritto.save((err, doc) => {
    if (!err) res.redirect("lista_iscritti");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Iscritto.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("lista_iscritti");
      } else {
        console.log("Errore durante l' update : " + err);
      }
    }
  );
}

router.get("/lista_iscritti", (req, res) => {
  Iscritto.find((err, docs) => {
    if (!err) {
      res.render("lista_iscritti", {
        iscrittolist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

// metodo che gli imposta il bottone per modificare e in base all'id trasferisce i dati al form predestinato
router.get("/:id", (req, res) => {
  Iscritto.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdateiscritti", {
        viewTitle: "Aggiornamento",
        iscritto: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Iscritto.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/lista_iscritti");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/chisiamo", (req, res) => {
  res.render("chisiamo");
  {
    titolo: "Chi Siamo";
  }
});

router.get("/contatti", (req, res) => {
  res.render("contatti"), { titolo: "Contatti" };
});

router.get("/terminiecondizioni", (req, res) => {
  res.render("terminiecondizioni"), { titolo: "Termini e Condizioni" };
});

router.get("/privacyepolicy", (req, res) => {
  res.render("privacyepolicy"), { titolo: "Privacy e Policy" };
});

router.get("*", (req, res) => {
  res.send("404");
  console.log(res);
});

module.exports = router;
