require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    res.json({
        message: "Hello json"
    });
});

var response = "Hello json".toUpperCase(); //HELLO JSON

if (process.env.VAR_NAME === "allCaps"){
    response = "Hello json".toUpperCase();
} else {
    response = "Hello json";
}

































 module.exports = app;
