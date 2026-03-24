const express = require("express");
const mongoose = require("mongoose");

const app = express();

let isConnected = false;

// async             


// middleware
app.use(express.json());

// app.use((req, res, next) => {
//   if (!isConnected) {
//     connectMongoDB()
//   }

//   next()
// })


// routes
app.get("/", (req, res) => {
  res.json({ message: "API Working ✅" });
});

app.get("/user", (req, res) => {
  res.json({ name: "Coding Guy", city: "Karachi" });
});


module.exports = app;
