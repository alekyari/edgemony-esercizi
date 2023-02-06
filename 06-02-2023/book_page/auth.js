const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "Alessio") {
    req.user = { name: "Alessio" };
    next();
  } else {
    // res.send("prova");
    console.log(user);

    res.status(401).send(`Utente : ${user} non è autorizzato`);
  }
};

module.exports = authorize;
