const express = require("express");

const server = express();

server.use(express.json());

const users = ["Beatriz", "Tony", "Lucas", "Viviane"];

server.use((req, res, next) => {
  console.time("Request");
  console.log(`Method: ${req.method}; URL: ${req.url} `);

  next();

  console.timeEnd("Request");
});

function checkUserName(req, res, next) {
  if (!req.body.name)
    return res.status(400).json({ error: "User need a name." });

  return next();
}

function checkUserIndex(req, res, next) {
  const user = users[req.params.index];

  if (!user) return res.status(400).json({ error: "User not exists." });

  req.user = user;

  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserIndex, (req, res) => {
  return res.json(req.user);
});

server.post("/users", checkUserName, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUserIndex, checkUserName, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", checkUserIndex, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
