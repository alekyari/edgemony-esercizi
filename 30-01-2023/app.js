// Esercizio

// Ciao ragazzi, allora eccoci col primo esercizio.
// Crea un progetto Node.js con un file chiamato app.js
// Crea un server che risponde alla porta 3000
// Crea 3 percorsi: pagina iniziale, studenti, corsi
// Nell’output puoi scrivere quello che vuoi  :mano_ok:
// Prova lo script ed esegui correttamente con il comando nel terminale
// Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine
//  Semplice, no?
// Happy coding!

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/")
    res.end(
      "Benvenuto nella nuova app per gestire i tuoi corsi e le lezioni della nostra scuola, vai alla pagina studenti per visualizzare i feedback dei nostri studenti, mentre nella pagina corsi avrai tutte le informazioni sui notri corsi. "
    );
  else if (req.url === "/studenti")
    res.end("Qui trovi tutti i feedback dei nostri studenti");
  else if (req.url === "/corsi")
    res.end("Qui trovi tutte le informazioni sui nostri corsi");
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(3000);

// I percorsi saranno i seguenti 3:

// http://localhost:3000 con relativo output alla riga 23

// http://localhost:3000/studenti con relativo output alla riga 26

// http://localhost:3000/corsi con relativo output alla riga 28
