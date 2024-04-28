module.exports = app => {
  const movies = require("../controllers/movie.controller.js");
  let router = require("express").Router();

  // Create a new Movie
  router.post("/", movies.create);

  // Retrieve all Movies
  router.get("/", movies.findAll);

  // Delete a Movie with id
  router.delete("/:id", movies.delete);

  // Retrieve all registered Movies
  router.get("/registered", movies.findAllRegistered);

  // Retrieve a single Movie with id
  router.get("/:id", movies.findOne);

  // Update a Movie with id
  router.put("/:id", movies.update);

  // Delete all Movies
  router.delete("/", movies.deleteAll);

  app.use("/api/movies", router);
};
