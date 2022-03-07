const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;
//Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gustavo Muñoz',
        titulo: 'Home - Curso de node'
    });
});



app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gustavo Muñoz',
        titulo: 'Generic - Curso de node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gustavo Muñoz',
        titulo: 'Elements - Curso de node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port)