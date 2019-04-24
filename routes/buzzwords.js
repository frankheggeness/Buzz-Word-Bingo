const express = require('express');
const router = express.Router();
const data = require('../data.js');

let buzzwords = data.getBuzzwordArray();

let findWord = function(word) {
  let index = -1;
  buzzwords.forEach((buzzword) => {
    if (Object.keys(buzzword)[0] === word) {
      return (index = buzzwords.indexOf(buzzword));
    }
  });
  return index;
};

router
  .route('/')
  .get((req, res) => {
    res.json(buzzwords);
  })
  .post((req, res) => {
    let body = req.body;
    let keyword = Object.keys(body)[0];
    let score = Object.values(body)[0];
    let object = {};
    object[keyword] = score;
    buzzwords.push(object);
    res.send(buzzwords);
  })
  .put((req, res) => {
    let body = req.body;
    let keyword = Object.keys(body)[0];
    let score = Object.values(body)[0];
    let index = findWord(keyword);
    if (index === -1) {
      res.end('false: cannot find buzzword');
    }
    buzzwords[index][keyword] = score;
    res.send(buzzwords);
  })
  .delete((req, res) => {
    let body = req.body;
    let keyword = Object.keys(body)[0];
    let score = Object.values(body)[0];
    let index = findWord(keyword);
    if (index === -1) {
      res.end('cannot find buzzword');
    }
    buzzwords.splice(index, 1);
    res.send(buzzwords);
  });

module.exports = router;
