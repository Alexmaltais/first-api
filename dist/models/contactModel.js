const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactModel = new Schema({
	firstName: String,
    lastName: String
});

const Contact = mongoose.model('Contact', contactModel);

module.exports = Contact

//module.exports = contactModel