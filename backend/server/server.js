const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const APIPORT = 3001;
const bodyParser = require('body-parser');
app.use('/', router);
module.exports=app;