require('.env').config();
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    app.use("/public", express.static(__dirname + "/public"));
});

app.get("/json", (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" ?
        res.json( {"message" : "HELLO JSON"}):
       res.json({"message" : "Hello json"});  
});



// app.get("/json", (req, res) => {
//     res.json({
//         message: "Hello json"
//     });
// });




































 module.exports = app;
