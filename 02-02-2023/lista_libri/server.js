const http = require("http");
const fs = require("fs");
const libri = require("./books");
const PORT = 2525;
let home = fs.readFileSync("index.html");
let info = fs.readFileSync("info.html");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home);
  } else if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(info);
  } else if (req.url === "/contacts") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>contatti</title>
          </head>
          <body>
            <h1>Benvenuti nella pagina Contatti</h1>
            <a href="/">Clicca qui per tornare alla Home </a>
          </body>
        </html>`);
  } else if (req.url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(libri));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

//provo a passare l impostazioni di server tramite una funzione di callback che richiamo nel motodo listen()
const callback = () => {
  const address = server.address().address; // 127.0.0.1 => indirizzo di loopback
  const port = server.address().port;
  console.log(`Server avviato in ascolto su http://${address}:${port}`);
};

server.listen(PORT, "localhost", callback);

//leggo il json
console.log(libri);
