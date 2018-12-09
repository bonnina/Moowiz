const express = require('express');
const router = express.Router();
const getAllActors = require('../methods/getAllActors');
const getActorByName = require('../methods/getActorByName');
const createActor = require('../methods/createActor');


/* GET all actors */
router.get('/', function(req, res) {
  getAllActors(function (result) {
    res.status(200).send(result);
  });
});

/* GET actor by name. */
router.get('/:name', function(req, res) {
  getActorByName(req.params.name, function (result) {
    res.status(200).send(result);
  });
});

/* Create actor */
router.post('/', function(req, res) {
  createActor(req.body.name, function (result) {
    res.status(201).send(result);
  });
});


module.exports = router;