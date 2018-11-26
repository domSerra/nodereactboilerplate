const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const os = require('os');

const app = express();

const PORT = process.env.PORT || 8080;

app.set('supersecret', process.env.SERVER_SECRET);

app.use(cors());
app.use(logger('dev'));
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({username: os.userInfo().username}))

app.listen(PORT, () => console.log(`Chained to port: ${PORT} in ${app.get('env')} mode.`)).on('error', console.error);
