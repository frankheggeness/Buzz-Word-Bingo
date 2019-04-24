const express = require('express');
const router = express.Router();
const data = require('../data.js');

router.route('/').post((req, res) => {
  let buzzwords = data.getBuzzwordArray;
  data.resetBuzzword();
  data.resetTotalScore();
  res.send(buzzwords);
});

module.exports = router;
