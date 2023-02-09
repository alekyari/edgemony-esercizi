const express = require("express");
const hbs = require("hbs");
const myPreferences = { pet: "cane", color: "blu", season: "estate" };

const app = express();
const PORT = 4040;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Alessio",
    titolo: "Corso di Node.js",
    ...myPreferences,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "About",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    titolo: "login",
  });
});

app.get("/mi_presento", (req, res) => {
  res.render("mi_presento", {
    titolo: "Mi Presento",
  });
});

app.post("/mi_presento", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).render("login");
  }
  res.status(400).render(`perfavore inserisci il tuo dato`);
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla posrta ${PORT}`);
});
