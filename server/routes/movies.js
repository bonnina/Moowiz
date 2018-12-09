const express = require('express');
const router = express.Router();
const getMovieByTitle = require('../methods/getMovieByTitle');
const getAllMovies = require('../methods/getAllMovies');
const createMovie =  require('../methods/createMovie');
const updateMovie = require('../methods/updateMovie');
const deleteMovie = require('../methods/deleteMovie');
const deleteAllMovies = require('../methods/deleteAllMovies');

/* GET all movies. */
router.get('/', function(req, res) {

  getAllMovies(function (result) {
    res.status(200).send(result);
  });
});

/* GET movie by title. */
router.get('/:title', function(req, res) {

  getMovieByTitle(req.params.title, function (result) {
    res.status(200).send(result);
  });
});

/* CREATE movie. */
router.post('/', function(req, res) {
  createMovie(req.body.title, req.body.year, req.body.format, req.body.stars, function (result) {
    res.status(201).send(result);
  });
});

/* UPDATE movie */
router.put('/', function(req, res) {
  updateMovie(req.body.title, req.body.year, req.body.format, req.body.id, req.body.stars, function (result) {
    res.status(201).send(result);
  });
});

/* DELETE movie */
router.delete('/:id', function(req, res) {
  deleteMovie(req.params.id, function (result) {
    res.sendStatus(200);
  //  res.status(200).send(result);  
  });
});

// DELETE all movies
router.delete('/', function(req, res) {
  deleteAllMovies(function (result) {
    res.sendStatus(200);
    //  res.status(200).send(result); 
  });
});

module.exports = router;
