const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});
let data = "Initial data";
app.get("/data", (req, res) => {
   res.send({ data });
});

app.get("/updateData", (req, res) => {
   data = "Hello World!";
   res.send({ data });
});

app.listen(8080, () => {
   console.log("Server started at port: 8080");
});
