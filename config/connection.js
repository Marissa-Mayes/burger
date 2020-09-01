  
const mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  console.log("hope we're on jaws")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Code1289!",
    database: "burgers_db",
  });
}
connection.connect((err) => {
  if (err) throw err;
  console.log(`Great success!`);
});

module.exports = connection;