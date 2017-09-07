console.log("Starting server...");

const express = require('express');
const app = express();

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000);