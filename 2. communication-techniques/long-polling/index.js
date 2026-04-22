const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

let requests = [];
let data = "Initial data";

app.get("/data", (req, res) => {
   if (req.query.data !== data) {
      res.json({ data });
   } else {
      const connectionId = Date.now();
      console.log(`Connection open for ${connectionId}`);
      requests.push({ clientId: connectionId, res });
      setTimeout(() => {
         res.json({ data: null });
         console.log(`Connection closed for ${connectionId}`);
         requests = requests.filter((client) => client.clientId != connectionId);
      }, 30000);
   }
});

app.get("/updateData", (req, res) => {
   data = req.query.data;
   while (requests.length > 0) {
      client = requests.pop();
      console.log(`Connection closed for ${client.clientId}`);
      client.res.json({ data });
   }
   res.json({ data: "Data updated successfully." });
});

app.listen(8080, () => {
   console.log("Server started at port: 8080");
});
