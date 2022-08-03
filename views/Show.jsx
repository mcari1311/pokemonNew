const React = require('react') 

class Show extends React.Component {
    render() {
        const { pokemon } = this.props

        return (
            <div> 
            <h1> Gotta catch them all </h1>
            <h2> {pokemon.name} </h2>
            <img src={pokemon.img + '.jpg'}></img> <br />
            <a href="/pokemon"> BACK </a>
            </div>
        )
    }
}

module.exports = Show