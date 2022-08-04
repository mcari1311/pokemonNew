const express = require('express') 
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()  
const mongose = require('mongoose')
const methodOverride = require('method-override');
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Pokemon = require('./models/pokemon.js')


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//middleware
app.use((req, res, next) => {
	console.log('I run for all routes')
	next()
}) 
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
app.post('/pokemon/', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
})


app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})

app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    }, (error, pokemon) => {
        res.redirect('/pokemon')
    })
})
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
      if(!err){
        res.render(
    		  'Edit',
    		{
    			pokemon: foundPokemon 
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.listen(port, function() {
    console.log('Listening on port', port)
})