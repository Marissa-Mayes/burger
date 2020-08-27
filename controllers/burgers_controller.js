const express = require("express");
const burger = require ("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
      console.log("food");
    });
  });
  router.post("/api/burgers", function(req,res){
      burger.insertOne([
          "burger_name", "devoured"
      ],[req.body.burger_name, req.body.devoured],function
      (result)
      {res.redirect("/")
      });
      });

      router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        let devoured = req.body.devoured
        console.log("condition", condition);
        
        burger.updateOne({devoured},condition, function(result){
        if(result.changedRows ===0){
              return res.status(404).end();
            } else {
              res.status(200).end();
            }
          });
        });

        router.delete("/api/burgers/:id", function(req, res) {
          var condition = "id = " + req.params.id;
          console.log("here");
        
        burger.delete(condition, function(result) {
            if (result.affectedRows == 0) {
              // If no rows were changed, then the ID must not exist, so 404
              return res.status(404).end();
            } else {
              res.status(200).end();
              console.log("nope");
            }
          });
        });
        

        module.exports = router;