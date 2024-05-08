const fs = require("fs");

export function getAccount(username) {
  return JSON.parse(fs.readFileSync("./data/accounts.json"));
}

export function createAccount(username, password) {}
