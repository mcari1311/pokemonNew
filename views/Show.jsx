const React = require('react') 

class Show extends React.Component {
    render() {
        const { pokemon } = this.props

        return (
            <h1> {pokemon.name} </h1>
        )
    }
}

module.exports = Show