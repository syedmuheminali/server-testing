const express = require("express");
const serverless = require("serverless-http");

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "API Working ✅" });
});

app.get("/user", (req, res) => {
  res.json({ name: "Coding Guy", city: "Karachi" });
});

// 👇 LOCAL RUN (IMPORTANT)
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// 👇 VERCEL EXPORT
module.exports = serverless(app);