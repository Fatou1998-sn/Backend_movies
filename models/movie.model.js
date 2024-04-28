module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      moviesType: String,
      nomRealisateur: String,
      moviesTitre: String,
      registered: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Movie = mongoose.model("movies", schema);
  return Movie;
};
