import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('hello World!');
});

app.listen(3000, function () {
    console.log('Example app listtening on port 3000!')
})