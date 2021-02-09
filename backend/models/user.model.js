const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	first_name: {
		type: String,
		required: true,
		trim: true
	},
	last_name: {
		type: String,
		required: true,
		trim: true
	},
	pin: {
		type: Number,
		required: true,
		unique: true
	},
	role: {
		type: ['ADMIN', 'MANAGER', 'STAFF'],
		required: true,
	}
}, {
	timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
