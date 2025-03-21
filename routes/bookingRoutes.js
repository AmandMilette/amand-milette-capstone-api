import express from "express";
import fs from "fs";
import { v4 as uuid } from "uuid";
const router = express.Router();

// get bookings = http://localhost:8000/bookings

router
  .route("/")
  .get((req, res) => {
    const bookings = JSON.parse(fs.readFileSync("./data/bookings.json"));

    res.json(bookings);
  })
  .post((req, res) => {
    const { pet_name, timestamp, description, owner_name, pet_type, category } =
      req.body;
    if (
      !pet_name.trim() ||
      !owner_name.trim() ||
      !description.trim() ||
      !timestamp.trim() ||
      !pet_type.trim() ||
      !category.trim()
    ) {
      return res.status(400).send("All fields must be filled out");
    }

    const bookings = JSON.parse(fs.readFileSync("./data/bookings.json"));
    const newBooking = {
      id: uuid(),
      pet_name,
      owner_name,
      description,
      pet_type,
      timestamp: new Date(timestamp).getTime(),
      category,
    };
    bookings.push(newBooking);

    fs.writeFileSync("./data/bookings.json", JSON.stringify(bookings));
    res.status(201).json(newBooking);
  });

export default router;
