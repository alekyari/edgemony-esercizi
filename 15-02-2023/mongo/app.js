const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://AlessioP:Ab123456coding@cluster0.ncb6ega.mongodb.net/test?retryWrites=true";

// Gli script che avete nel file vi servono per creare le vostre richieste dalla connessione alla cancellazione dei dati.
// Quindi create e connettetevi ad un db chiamato school, dentro create 2 collection: students e courses.
// La collection student raccoglie, nome, cognome, matricola (scegliete un codice numerico), corsi ai quali lo studente è iscritto,
//  esami da sostenere. Nella collection courses: nome del corso, materia, docenti.
// Inserite per ogni collections un discreto numero di documenti sui quali dovrete applicare le 4 operazioni CRUD: Creo, Leggo, Modifico/aggiorno, Cancello.
// Utilizzate le opzioni di find => One / Many e così di insert.

//Mi connetto al mio database
// MongoClient.connect(url)
//   .then((db) => {
//     accountDb = db;
//     collection = accountDb.db("school");
//     console.log("database connesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Creo una nuova collezione
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase.createCollection("courses", (err, res) => {
//     if (err) throw err;
//     console.log("collezione creata");
//     db.close();
//   });
// });

//Inserimento di più campi => query insertmany()
//Students Collection
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");

//   let myObj = [
//     {
//       nome: "Mario",
//       cognome: "Rossi",
//       anni: "20",
//       matricola: "10078",
//       corsi: ["Fisica", "Geometria", "Analisi"],
//       esami: ["Fisica", "Chimica"],
//     },
//     {
//       nome: "Alberto",
//       cognome: "Bianchi",
//       anni: "23",
//       matricola: "10023",
//       corsi: ["Arte", "Letteratura", "Filosoia"],
//       esami: ["Letteratura", "Storia"],
//     },
//     {
//       nome: "Lucia",
//       cognome: "Verdi",
//       anni: "21",
//       matricola: "10045",
//       corsi: ["Fisica", "Disegno", "Idraulica"],
//       esami: ["Analisi", "Geometria", "Fisica"],
//     },
//     {
//       nome: "Maria",
//       cognome: "Gialli",
//       anni: "28",
//       matricola: "00895",
//       corsi: ["Impianti", "Fisica Tecnica", "Dinamica delle Strutture"],
//       esami: ["Scienze delle Costruzioni", "Chimica", "Estimo"],
//     },
//     {
//       nome: "Valter",
//       cognome: "Neri",
//       anni: "19",
//       matricola: "10108",
//       corsi: ["Diritto Romano", "Storia del Diritto", "Filosofia"],
//       esami: ["Filosofia", "Storia del Diritto"],
//     },
//     {
//       nome: "James",
//       cognome: "Blue",
//       anni: "25",
//       matricola: "00990",
//       corsi: ["Filosifa del Diritto", "Diritto Penale"],
//       esami: ["Diritto Civile"],
//     },
//   ];

//   dbase.collection("students").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

//Courses Collection
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");

//   let myObj = [
//     {
//       titolo: "Fondamenti di Chimica Inorganica",
//       materia: "Chimica",
//       docenti: ["Luigi Palmisano", "Mario Di Benedetto"],
//     },
//     {
//       titolo: "Dalle equazioni alle funzioni complesse",
//       materia: "Analisi",
//       docenti: ["Luisa Ardizzone", "Paola Chiara"],
//     },
//     {
//       titolo: "La filosofia del Diritto",
//       materia: "Diritto",
//       docenti: ["Mario Pascal", "Enrico Bona"],
//     },
//     {
//       titolo: "La Storia Moderna",
//       materia: "Storia",
//       docenti: ["Grazia Pavone", "Enrico Bona", "Rosa Di Pasquale"],
//     },
//     {
//       titolo: "La Scienza delle Costruzioni",
//       materia: "Scienze delle Costruzioni",
//       docenti: ["Umberto Favino", "Rosario Alagna"],
//     },
//     {
//       titolo: "Disegno Tecnico I",
//       materia: "Disegno",
//       docenti: ["Maria Bonano", "Mario Basile"],
//     },
//   ];

//   dbase.collection("courses").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

//Seleziono un solo dato
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase.collection("students").findOne({ nome: "Alberto" }, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// //Selezioni tutti i dati
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase
//     .collection("students")
//     .find({})
//     .toArray(function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
// });

//seleziono con filtro
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let query = { anni: "19" };
//   dbase
//     .collection("students")
//     .find(query)
//     .toArray(function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
// });

//elimina uno specifico documento
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let query = { materia: "Diritto" };
//   dbase.collection("courses").deleteMany(query, function (err, obj) {
//     if (err) throw err;
//     console.log(`${obj.result} records cancellati`);
//     db.close();
//   });
// });

//aggiornare un documento
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let query = { nome: "Alberto" };
//   let newValue = { $set: { anni: "23", esami: ["Filosofia", "Storia"] } };
//   dbase.collection("students").updateOne(query, newValue, function (err, res) {
//     if (err) throw err;
//     console.log(`records aggiornati`);
//     db.close();
//   });
// });
