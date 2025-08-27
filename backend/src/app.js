const express = require('express');
const router = require('./router')

const app = express();

app.use(express.json())
app.use(router);


router.get('/', (request, response) => response.status(200).send("router está funcionando"));


module.exports = app;