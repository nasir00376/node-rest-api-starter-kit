const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressSanitized = require('express-sanitize-escape');
const { slaveDB } = require('./config/db');
const { routes } = require('./routes');

const debug = require('debug')('app');

const app = express();

slaveDB
	.authenticate()
	.then(() => debug('Database connected successfully!'))
	.catch(error => debug('Database authenticaion error...'));

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Secure HTTP headers
app.use(helmet());
// Sanitize post body i.e remove Js script and encode html tages to html entitities
app.use(expressSanitized.middleware());


// Protect all routes
// Set routes as middlewares
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Use routes as middlewares
routes(app);

app.get('/', (req, res) =>
	res.status(200).send({
		message: 'Welcome to the Chiropethic.'
	})
);

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, debug(`Server is listening on ${PORT}`));
