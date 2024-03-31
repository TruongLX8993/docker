const express = require('express');
const app = express();
const port = 3000;

const {Logger} = require('./logger.js')
const {static} = require("express");
const fs = require('fs');


let logger = new Logger('test');
app.get('/', (req, res) => {
    res.send('Hello World!');
    logger.logError('Test');
});

app.get('/logs/', (req, res) => {
    let data = fs.readFileSync('logs/global.log', "utf-8");
    res.send(data);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
