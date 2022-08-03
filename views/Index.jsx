const React = require('react') 

const myStyle = {
    color: '#ff0000',
    backgroundColor: '#000000',
  };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <h1 style={myStyle}>See all the Pokemon!</h1>
        )
    }
}

module.exports = Index