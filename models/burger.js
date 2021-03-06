const orm = require("../config/orm.js");
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (cols, vals, cb) {
    orm.updateOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  delete: function (condition,cb){
    orm.delete("burgers",condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
