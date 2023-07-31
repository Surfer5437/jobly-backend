"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    host:'localhost',
  user:'livin',
  port:'5432',
  password:'rootUser',
  database:'jobly'
  });
} else {
  db = new Client({
    host:'localhost',
  user:'livin',
  port:'5432',
  password:'rootUser',
  database:'jobly'
  });
}

db.connect();

module.exports = db;

