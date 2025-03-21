import express from "express";
import fs from "fs";
const router = express.Router();

// get bookings = http://localhost:8000/bookings

router.route("/").get((req, res) => {
  const bookings = JSON.parse(fs.readFileSync("./data/bookings.json"));

  res.json(bookings);
});

export default router;
