const express = require('express');
const path = require('path');
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const router= require('./routes/router')
const dotenv = require('dotenv').config();

const app = express();

app.disable('x-powered-by');

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(router)


module.exports = app;