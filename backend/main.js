const PORT = 3000;
const ACCOUNTDATAPATH = "./data/accounts.json";

const fs = require("fs");

let accountsJSON = JSON.parse(fs.readFileSync(ACCOUNTDATAPATH));

function updateAccountFile() {
  fs.writeFileSync(ACCOUNTDATAPATH, JSON.stringify(accountsJSON));
}

function getUsernameFromEmail(email) {
  let allUsernames = Object.keys(accountsJSON);
  result = 0;
  allUsernames.forEach((username) => {
    if (accountsJSON[username].email === email) result = username;
  });
  return result;
}

function accountExists(username = undefined, email = undefined) {
  if (username != undefined) {
    if (typeof accountsJSON[username] == "undefined") return false;
    else return true;
  } else if (email != undefined) {
    if (getUsernameFromEmail(email)) return true;
  }
  return false;
}

function createAccount(username, email, password) {
  accountsJSON[username] = {
    password,
    email,
  };
  updateAccountFile();
}

const express = require("express");
const { get } = require("http");
const app = express();

app.get("/signup", (req, res) => {
  let username = req.query.u;
  let password = req.query.p;
  let email = req.query.e;

  if (username == undefined || password == undefined || email == undefined) {
    res.send("error in query");
  }

  if (accountExists(username, undefined) || accountExists(undefined, email)) {
    res.send("account exists");
  } else {
    createAccount(username, email, password);
    res.redirect("/");
  }
});

app.get("/login", (req, res) => {
  let username = req.query.u;
  let password = req.query.p;
  let email = req.query.e;

  if (password == undefined || username == undefined || email == undefined) {
    res.send("error in query");
  }

  if (accountExists(username)) {
    res.send(accountsJSON[username]);
  } else {
    res.send("that account doesnt exist");
  }
  if (accountExists(undefined, email)) {
    res.send(accountsJSON[getUsernameFromEmail(email)]);
  } else {
    res.send("that account doesnt exist");
  }
});

app.listen(PORT, () => {
  console.log("Server is running");
});
