var connection = require("../config/connection.js");
//orm methods//
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
const orm = {
    selectAll: function(table, cb,) {
        const query = "SELECT * FROM ?? ";
    connection.query(query,[table] ,function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      updateOne: function(table,devoured,condition, cb) {
        console.log("WE ARE Purple")
        const query = `UPDATE ${table} SET devoured = ${devoured.devoured} WHERE ${condition}`;
    connection.query(query,function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

       
    module.exports = orm;
