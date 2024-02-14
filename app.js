const express = require("express");

const app = require("express")();
const drinks = [
  { name: "OldFashioned", ingridents: ["Bourbon", "angostura", "rørsukker"] },
  { name: " CubaLibra", ingredients: ["Rum", "Coca Cola"] },
  { name: "Cosmopolitan", ingredients: ["Cointreau", "vodka", "tranebær juice", "limesaft"] },
];
app.get("/drinks", (req, res) => {
  res.send(drinks);
});

//
app.get("/drinks/:drinkIndex", (req, res) => {
  const drinkIndex = Number(req.params.drinkIndex);
  if (drinkIndex >= 0 && drinkIndex < drinks.length) {
    res.send(drinks[drinkIndex]);
  } else {
    res.status(404).send("Drink not found");
  }

  res.send(drinks);
});

app.listen(8080);
