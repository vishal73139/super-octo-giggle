const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: dbConfig.USER, // update me
      password: dbConfig.PASSWORD, // update me
    },
    type: "default"
  },
  server: dbConfig.HOST, // update me
  options: {
    database: dbConfig.DB, //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("success");
  }
});

module.exports = connection;
