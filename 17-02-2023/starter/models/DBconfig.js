const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://AlessioP:Ab123456coding@cluster0.ncb6ega.mongodb.net/note?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connesso.");
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

require("./nota");
require("./libro");
