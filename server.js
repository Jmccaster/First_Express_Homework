const express = require("express");
const app = express();
const ejs = require("ejs");

app.get("/", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting", (req, res) => {
  res.send("Hello, Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send("Wow! Hello there," + req.params.name);
});

app.get("/greeting/:Jimmy-boy", (req, res) => {
  res.send("Hello, Stranger");
});

const answer = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let total = parseInt(req.params.total);
  let tipPercentage = parseInt(req.params.tipPercentage);
  let tipTotal = total(tipPercentage / 100).toString();
  res.send(tipTotal);
});

app.get("/magic", (req, res) => {
  res.send("Ask a question in the url");
});
app.get("/magic/:question", (req, res) => {
  let randomAnswer = answer[Math.floor(Math.random()(answer.length))];
  res.send(req.params.question + "? " + randomAnswer);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
