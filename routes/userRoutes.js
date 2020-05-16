const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
// GET /api/users
// GET /api/users/:id
// POST /api/users
// PUT /api/users/:id
// DELETE /api/users/:id

router.get('/api/users', function(req, res, next) {
  res.send('GET Api Users');
});

router.post('/api/users', function(req, res, next) {
  createUserValid(req.body);
  res.send('POST Api Users id ', id);
});

router.get('/api/users/:id', function(req, res, next) {
  UserService.getName(req.body)
  res.send('GET Api Users id ', id);
});

router.put('/api/users/:id', function(req, res, next) {
  updateUserValid(req.body);
  res.send('PUT Api Users id ', id);
});

router.delete('/api/users/:id', function(req, res, next) {
  res.send('DELETE Api Users id ', id);
});

module.exports = router;