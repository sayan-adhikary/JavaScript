import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('home!');
});

app.get('/about', (req, res) => {
    res.send('about!');
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});