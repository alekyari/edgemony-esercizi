/* Implementate l'applicazione con i percorsi per mostrare 2 pagine html, per esempio, 
una pagina prodotti e una pagina cliente, oltre alla home page che è già impostata.
Fate attenzione a cosa vi servirà per mostrare e poi integrare le due pagine esterne.
e poi una domanda su cui riflettere: è possibile creare nelle pagine web un collegamento 
fra le pagine nel modo solito, cioè usando <a href="#">.....</a> considerando 
la particolare struttura dei percorsi in Node? Provate un po' da soli, poi domani verifichiamo.*/

const http = require("http");
const os = require("os");
const fs = require("fs");
const paginaProdotti = fs.readFileSync("./products_page.html");
const paginaCliente = fs.readFileSync("./client_page.html");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
<ul>
      <li><a href="http://localhost:3001/cliente">Pagina Cliente</a></li>
      <li><a href="http://localhost:3001/prodotti">Pagina Prodotti</a></li>
    </ul>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/prodotti") res.end(paginaProdotti);
  else if (req.url === "/cliente") res.end(paginaCliente);
  else {
    res.writeHead(400);
    res.end("Sorry, not found");
  }
});
server.listen(3001);
console.log(messaggio);
