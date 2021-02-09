const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRole  = {
	admin : 'admin',
	manager: 'manager',
	user : 'user'
}


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
		type: String,
		enum: userRole,
		default: userRole.user,
	}
}, {
	timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
