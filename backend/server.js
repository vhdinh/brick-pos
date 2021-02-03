const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoose setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('mongodb database connection successfully');
})

// User Route
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () => {
	console.log('**********');
	console.log('Server Up and running on port: ', port);
	console.log('**********');

})