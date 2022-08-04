const React = require('react');

class Edit extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} /><br />
                Color: <input type="text" name="color" defaultValue={this.props.pokemon.color} /><br />
                <br />
                <input type="submit" value="Submit Changes" />
            </form>
        )
    }

}
module.exports = Edit;