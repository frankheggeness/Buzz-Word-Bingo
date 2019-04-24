const express = require('express');
const bodyParser = require('body-parser');
const buzzWordRoute = require('./routes/buzzwords.js');
const resetRoute = require('./routes/reset.js');
const heardRoute = require('./routes/heard.js');
let PORT = 3000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/buzzwords', buzzWordRoute);
app.use('/reset', resetRoute);
app.use('/heard', heardRoute);

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
