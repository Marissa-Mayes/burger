const express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
app.use((req,res,next)=>{
  console.log(req.url, req.method, res.statusCode)
  next()
})

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main",
//partialsDir:
}));

app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);


app.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:" + PORT);
});
