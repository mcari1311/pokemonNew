const express = require('express') 
require('dotenv').config()
const app = express()  
const port = process.env.PORT || 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon:pokemon})
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon:pokemon[req.params.id]})
})
app.listen(port, function() {
    console.log('Listening on port', port)
})