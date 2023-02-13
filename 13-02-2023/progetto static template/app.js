const express = require("express");
const hbs = require("hbs");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4040;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "la mia sessione" }));

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

/*-----Autenticazione------*/
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`);

  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("signup", {
      titolo: "Accedi",
      message: "Attenzione! Accertati di aver inserito tutti i dati richiesti",
    });
  } else {
    let name = "Admin";
    let password = "123";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

app.get("/private", checkPage, (req, res) => {
  res.render("private"), { titolo: "Il tuo profilo" };
});

app.get("/warning", (req, res) => {
  res.render("warning"), { titolo: "Errore" };
});

app.get("/logout", (req, res) => {
  console.log("hai fatto logout");
  req.session = null;
  res.redirect("/");
});

/*------Autenticazione */

app.get("*", (req, res) => {
  res.render("404");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla posrta ${PORT}`);
});
