const express = require("express"); // import express
const app = express(); // create an instance of express
const port = 3000; // set the port
const cors = require("cors"); // import cors
const fs = require('fs')

const pdfDoc = require("./middlewares/pdfDoc"); // import pdfDoc
const path = require("path"); // import path

app.use(express.json()); // use json
app.use(cors()); // use cors

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/", (req, res) => {
 
  if(fs.existsSync("./docs/")){
    // req.body send to name, lastname, address, phone, email  of the user
    const pdf = pdfDoc(req.body);
    if (pdf.path) {
      setTimeout(function () {
        res.sendFile(pdf.path);
      }, 5000);
    } else {
      res.status(500).send("No found path to pdf");
    }
  }else{
    res.status(500).send("Not exist directory docs ");
  }
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
