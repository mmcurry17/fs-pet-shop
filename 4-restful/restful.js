import express from "express";
import petData from "../pets.json" assert { type: "json" };
import * as fs from "fs";
import { exit } from "process";

const app = express(express.json());

app.use(express.json());
// app.use(logger);

app.post("/pets", (req, res) => {
  const newPet = req.body;
  console.log("New pet added", newPet);
  petData.push(newPet);
  fs.writeFile("../pets.json", JSON.stringify(petData), (err) => {
    if (err) {
      console.error(err);
      exit(1);
    } else {
      res.status(200).send(petData);
    }
  });
});

app.get("/pets/:index", (req, res, next) => {
  const { index } = req.params;
  console.log("id", index);
  if (Number.isInteger(Number(index)) && index < petData.length && index >= 0) {
    res.send(petData[index]);
  }
  next();
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
