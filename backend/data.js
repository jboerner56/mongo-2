const mongo = require('mongoose');
const Schema = mongo.Schema;

const DataSchema = new Schema({
    id: Number,
    Date: Date,
    Name: String,
    Amount: Number,

}
)
module.exports = mongo.model('Data', DataSchema);