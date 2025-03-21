import express from "express";
import cors from "cors";

import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to My Server");
});

app.listen(8000, () => {
  console.log("Server Listening at http://localhost:8000");
});
