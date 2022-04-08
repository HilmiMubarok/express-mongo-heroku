require('dotenv').config();

let config = {
	dbUrl: process.env.MONGODB_URL
};

module.exports = config;
