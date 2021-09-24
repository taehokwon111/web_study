const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
    var file = path.join(`${__dirname}/content`);
    console.log(`${__dirname}/content/test.txt`)
    res.download(`${__dirname}/content/test.txt`);
    res.send('Hello World!')
    // res.download(file);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
