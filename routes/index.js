const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

const Movie = require('.../models/Movie.model');

router.get('/movies', (req, res) => {
  Movie.find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.error(err));
});

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
      .then(movie => res.render('movie-details', { movie }))
      .catch(err => console.error(err));
  });
  