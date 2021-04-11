const express = require('express')

let app = express();

app.get('/say', function (req, res) {
    const { wd, cb } = req.query;
    res.end(`${cb}({ name: 'deivo', age: 18 })`);
})

app.listen(3000, function () {
    console.log('serve start 3000!')
});