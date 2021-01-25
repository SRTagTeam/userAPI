var express = require('express');
router = express.Router();
const dataAccess = require('../../../core/dataaccess');
const debugApplication = require('debug')('app:application');
const UserModel = require('../../models/userModel');

router.get('/', function (req, res) {
  dataAccess.getAll(UserModel, res);
});

router.get('/:id', function (req, res) { 
  dataAccess.get(UserModel, req.params.id, res);
});

router.post('/', async function (req, res) {
  const userObject = getModel(req, res);
  await dataAccess.insert(userObject, res);
});

router.put('/:id', function (req, res) {
  // const userObject = getModel(req, res);
  dataAccess.update(UserModel, req.params.id, req, res);
});

router.delete('/:id', function (req, res) {
  debugApplication('delete call');  
  dataAccess.delete(UserModel, req.params.id, res);
});

function getModel(req, res) {
  if(!req) {
    res.status(400).send('Bad Request', req.body);
  }
  const userObject = new UserModel({
    name: req.body.name,
    role: req.body.role,
    status: req.body.status,
    createdBy: req.body.createdBy,
    createdAt: req.body.createdAt
  });

  return userObject;
}

module.exports = router;