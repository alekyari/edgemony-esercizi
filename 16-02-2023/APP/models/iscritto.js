const mongoose = require("mongoose");

//Sto creando un oggetto della classe schema con il quale gestisco i miei dati
var iscrittoSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  cognome: {
    type: String,
  },
  anni: {
    type: Number,
  },
  matricola: {
    type: Number,
  },
});

/*La collezione verrà chiamata notaModel ma secondo formattazione di Mongoose viene prularizzata e scritta in minuscolo<*/
mongoose.model("iscrittoModel", iscrittoSchema);
