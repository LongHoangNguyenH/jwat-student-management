const express = require('express');
const classRoute = require('./src/route/classRoute.js');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const studentRoute = require('./src/route/studentRoute.js');

app.use(bodyParser.json());
app.use('/class', classRoute);
app.use('/student', studentRoute);

app.listen(PORT, error => {
  if (!error) console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  else console.log("Error occurred, server can't start", error);
});
