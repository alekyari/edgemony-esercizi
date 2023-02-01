const http = require("http");
const PORT = 3001;
const os = require("os");
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
const paginaArticoli = "/articoli";
const paginaCommenti = "/commenti";
const paginaUtenti = "/utenti";

let message = `<!doctype html><html><head></head>
<body>
l'utente <b>${utente.username}</b> ha avviato l'app il giorno 
<b>${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}
 usando la piattaforma ${piattaforma}</b>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Benvenuto nella Home");
  else if (req.url === paginaArticoli)
    res.end(`Benvenuto ${utente.username} nella pagina Articoli`);
  else if (req.url === paginaCommenti)
    res.end(`Benvenuto ${utente.username} nella pagina Commenti`);
  else if (req.url === paginaUtenti)
    res.end(`Benvenuto ${utente.username} nella pagina Utenti`);
  else {
    if (res.writeHead(400)) res.end("Sorry, not found");
    else {
      res.writeHead(200);
      res.end(message);
    }
  }
});
server.listen(PORT);

console.log(`Server connesso alla porta ${PORT}`);
