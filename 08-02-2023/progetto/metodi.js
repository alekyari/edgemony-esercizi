const express = require("express");
const items = require("./articoli");
const app = express();

const PORT = 3050;

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/items", (req, res) => {
  res.status(200).json({ success: true, data: items });
});

//METODO POST
app.post("/api/items/post", (req, res) => {
  const { id, title, body, userId, tags, reactions } = req.body;
  if ((!id || !title, !body, !userId, !tags, !reactions)) {
    return res
      .status(400)
      .json({ success: false, msg: `non trovo un dato necessario` });
  }
  return res.status(201).json({
    success: true,
    person: [
      ...items,
      {
        id: id,
        title: title,
        body: body,
        userId: userId,
        tags: tags,
        reactions: reactions,
      },
    ],
  });
});

//METODO POST CON DATO RICEVUTO DA FORM

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Benvenuto/a ${name}`);
  }
});

//METODO HTTP PUT => /api/items/modify/3
app.put("/api/items/modify/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { body } = req.body;
  const { userId } = req.body;
  const { tags } = req.body;
  const { reactions } = req.body;

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessuno con id: ${id}` });
  }

  const newItems = items.map((item) => {
    if (item.id === Number(id)) {
      item.title = title;
      item.body = body;
      item.userId = userId;
      item.tags = tags;
      item.reactions = reactions;
    }
    return item;
  });

  res.status(200).json({ success: true, data: newItems });
});

//METODO HTTP DELETE => /api/people/3
app.delete("/api/items/delete/:id", (req, res) => {
  const item = items.find((item) => item.id === Number(req.params.id));

  if (!item) {
    return res.status(400).json({
      success: false,
      msg: `non c'è nessuno con id: ${req.params.id}`,
    });
  }

  const newItems = items.filter((item) => item.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newItems });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su porta ${PORT}`);
});
