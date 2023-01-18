const express = require('express');
const router = express.Router();
const homeCtrl = require('../constrollers/homeController');

module.exports = () => {
  router.get('/', homeCtrl.showJobs);

  return router;
};
