const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there Matt Owen!' });
});

//app.get('/tom',(req, res) => {
//    res.send({ tom: 'hi there' });
//});

// console.log(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);


// localhost:5000 test
