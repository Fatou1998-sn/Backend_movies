const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 4002;
const db = require("./models");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log(`Connected to the database '${db.url}' !`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database '${db.url}' !`, err);
    process.exit();
  });

app.use(logger("dev"));

require("./routes/movie.routes")(app); // Modification du chemin pour les routes des films

app.get("/", (req, res) => {
  res.json({ message: "Welcome to glsi movies application." }); // Modification du message de bienvenue
});

app.listen(PORT, () => {
  console.log(`Backend express server is running on port ${PORT}.`);
});
