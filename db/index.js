const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      return console.error(err.message);
    }
  });

  module.exports = db;
