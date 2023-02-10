const express = require("express");
const hbs = require("hbs");
// const articoli = require("./articoli");

const app = express();
const PORT = 4040;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about"), { titolo: "About" };
});

app.get("/web-design", (req, res) => {
  res.render("web-design"), { titolo: "Web Design" };
});

app.get("/contatti", (req, res) => {
  res.render("contatti"), { titolo: "Contatti" };
});

app.get("/formazione", (req, res) => {
  res.render("formazione"), { titolo: "Formazione" };
});

app.get("*", (req, res) => {
  res.render("404");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla posrta ${PORT}`);
});
