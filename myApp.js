require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE = "uppercase") {
        response = "Hello JSON".toUpperCase();
      } else {
        response = "Hello json";
      }
});

//var response = "Hello json".toUpperCase(); //HELLO JSON



































 module.exports = app;
