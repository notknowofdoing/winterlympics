const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('hello, world!');
    res.status(200).send('hello, world!!')
})

app.listen('8000');
