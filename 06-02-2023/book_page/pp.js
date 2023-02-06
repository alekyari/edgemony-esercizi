const express = require("express");
const authorize = require("./auth");
const libri = require("./books");
const PORT = 8081;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Home Page</title>
    </head>
    <body>
      <h1>About</h1>
      <div class="menu">
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/api/books">List of books</a>
          </li>
          <li>
          <a class="trigger" href="/api/private/bookso"
            >Private List of books, please add:" ?user=your_username "in the url</a>
        </li>
        </ul>
      </div>
    </body>
  </html>
  `);
});

app.get("/contacts", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Home Page</title>
    </head>
    <body>
      <h1>Contacts</h1>
      <div class="menu">
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/api/books">List of books</a>
          </li>
          <li>
          <a class="trigger" href="/api/private/books"
            >Private List of books, please add:" ?user=your_username "in the url</a>
        </li>
        </ul>
      </div>
    </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`server in ascolto sulla porta: ${PORT}`);
});

app.get("/api/books", (req, res) => {
  res.send(libri);
});

app.get("/api/private/books", [authorize], (req, res) => {
  res.send(libri.slice(1, 4));
});

app.get("/api/books/:bookID", (req, res) => {
  console.log(req.params);
  const { bookID } = req.params;

  const singleBook = libri.find((book) => book.id === Number(bookID));

  if (!singleBook) {
    return res.status(404).send("L'articolo non esiste");
  }
  return res.json(singleBook);
});

app.get("*", (req, res) => {
  res.send("404 | pagina non trovata");
});
