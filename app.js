const express = require('express');

const app = express();
const host = '127.0.0.1';
const port = 3000;
const static = __dirname + '/static/';


app.use(express.static(static));


app.get('/', (req, res) => {
    res.sendFile(static + 'index.html');
});

app.get('/raw', (req, res) => {
    res.sendFile(static + 'raw.html');
});


app.listen(port, host, () => {
    console.log(
        `Server is open at: http://${host}:${port}`
    );
})