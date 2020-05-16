const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

// GET /api/fighters
// GET /api/fighters/:id
// POST /api/fighters
// PUT /api/fighters/:id
// DELETE /api/fighters/:id

router.get('/api/fighters', function(req, res, next) {
  res.send('GET Api fighters');
});

router.post('/api/fighters', function(req, res, next) {
  createUserValid();
  res.send('POST Api fighters id ', id);
});

router.get('/api/fighters/:id', function(req, res, next) {
  res.send('GET Api fighters id ', id);
});

router.put('/api/fighters/:id', function(req, res, next) {
  updateUserValid();
  res.send('PUT Api fighters id ', id);
});

router.delete('/api/fighters/:id', function(req, res, next) {
  res.send('DELETE Api fighters id ', id);
});

module.exports = router;