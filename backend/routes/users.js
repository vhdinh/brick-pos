const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const newUser = new User({
		username: username,
		first_name: 'Test',
		last_name: 'McTester',
		pin: req.body.pin,
		role: 'STAFF'
	})
	newUser.save()
		.then((user) => res.json(user))
		.catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
	User.findById(req.params.id)
		.then(user => {
			user.username = req.body.username;
			user.first_name = req.body.first_name;
			user.last_name = req.body.last_name;
			user.pin = Number(req.body.pin);
			user.role = req.body.role;

			user.save()
				.then(() => res.json(user))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json(`User ${req.params.id} deleted!`))
		.catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
