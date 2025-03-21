import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My Server");
});

app.listen(8000, () => {
  console.log("Server Listening at http://localhost:8000");
});
