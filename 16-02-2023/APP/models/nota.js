const mongoose = require("mongoose");

//Sto creando un oggetto della classe schema con il quale gestisco i miei dati
var notaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  text: {
    type: String,
  },
  age: {
    type: Number,
  },
});

/*La collezione verrà chiamata notaModel ma secondo formattazione di Mongoose viene prularizzata e scritta in minuscolo<*/
mongoose.model("notaModel", notaSchema);
