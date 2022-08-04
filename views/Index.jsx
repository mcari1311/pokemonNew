const React = require('react')

const myStyle = {
    color: '#ff0000',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1 style={myStyle}>See all the Pokemon! Index Page </h1>
                {pokemon.map((pokemon) => {
                    return (
                        <li>
                            The {' '}
                            <a href={`/pokemon/${pokemon.id}`}> {pokemon.name} pokemon color {' '} is {pokemon.color}

                            </a>
                            <br />
                            <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method="POST"><button type="submit">Delete</button></form>
                            <a href={`/pokemon/${pokemon.id}/edit`}>Edit This Pokemon</a>
                        </li>
                    )
                })} <br />
                <br /> <a href="/pokemon/new">Create a New Pokemon</a> <br />
            </div>
        )
    }
}

module.exports = Index