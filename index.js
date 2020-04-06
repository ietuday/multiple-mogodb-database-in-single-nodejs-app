const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const connect = require('./utils/db');
// connect();
require('./models/userSchema');
require('./models/customerSchema');


app.use(require('./routes'))





















app.listen(port, () => {
    console.log('Example app listening on port 3000!');
})

