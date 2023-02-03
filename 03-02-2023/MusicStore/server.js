const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/guitar", (req, res) => {
  res.sendFile(__dirname + "/public/guitar.html");
});

app.get("/bass", (req, res) => {
  res.sendFile(__dirname + "/public/bass.html");
});

app.get("/piano", (req, res) => {
  res.sendFile(__dirname + "/public/piano.html");
});

app.get("*", (req, res) => {
  res.send("404 | pagina non trovata");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
