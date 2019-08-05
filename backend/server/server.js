require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const Data = './data';
const APIPORT = 3001;
const bodyParser = require('body-parser');
// add route once mongo finishs setting up
const dbRoute = 'mongodb://jboerner56:Football56@cluster0-ri7ld.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
// set mongo to variable for easier use and less typos
const db = mongoose.connection;
// opens the database connection, errors will be logged to console.
db.once('open', () => console.log('db connected'));
// logs error when connection cant be connected
db.on('error', console.error.bind(console, 'mongo connection error:'));
// use bodyparser to parse body to a useable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// fetching data from mongodb cloud
router.get('/getData', (req, res) => {
    Data.find((error, data) => {
        // will show error if data is not successfully returned
        if (error) return res.json({ success: false, error: error });
        // gives access to data on successful fetch
        return res.json({ success: true, data: data });
    });
});

app.listen(APIPORT, () => console.log(`listening on port ${APIPORT}`));
module.exports=app;