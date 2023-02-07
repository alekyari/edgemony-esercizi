const express = require("express");
const users = require("./users");

const app = express();

const PORT = 8080;

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.post("/api/users", (req, res) => {
  const { id, name, username, email, address, phone, website, company } =
    req.body;
  if (
    !id ||
    !name ||
    !username ||
    !email ||
    !address ||
    !phone ||
    !website ||
    !company
  ) {
    return res
      .status(400)
      .json({ success: false, msg: `non trovo un dato necessario` });
  }
  return res.status(200).json({
    success: true,
    person: {
      id: id,
      name: name,
      username: username,
      email: email,
      address: address,
      phone: phone,
      website: website,
      company: company,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su porta ${PORT}`);
});
