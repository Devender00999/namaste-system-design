import bodyParser from "body-parser";
import express from "express";

app = express();

app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// TODo to expose rest call
// call gRPC server function using gRPC client

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`);
});
