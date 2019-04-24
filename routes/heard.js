const express = require('express');
const router = express.Router();
const data = require('../data.js');

let buzzwords = data.getBuzzwordArray();
let totalScore = data.getTotalScore();

let findWord = function(word) {
  let index = -1;
  buzzwords.forEach((buzzword) => {
    if (Object.keys(buzzword)[0] === word) {
      return (index = buzzwords.indexOf(buzzword));
    }
  });
  return index;
};

router.route('/').post((req, res) => {
  let body = req.body;
  let keyword = Object.keys(body)[0];
  let score = Object.values(body)[0];
  let index = findWord(keyword);
  if (index === -1) {
    res.end('false: cannot find buzzword');
  }
  totalScore += parseInt(buzzwords[index][keyword]);
  res.send(`Total Score: ${totalScore.toString()}`);
});

module.exports = router;
