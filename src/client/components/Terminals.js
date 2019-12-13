import React from 'react';
import axios from 'axios';

class Terminals extends React.Component {
  state = {
    terminals: []
  }

  componentDidMount() {
    axios.get('/terminals')
      .then(res => {
        const terminals = res.data;
        this.setState({ terminals: terminals });
      })
  }

  render() {
    return (
      <ul>
        {this.state.terminals.map(terminal => <li key={terminal.id}>{terminal.address}<br />{terminal.latitude}<br />{terminal.longitude}</li>)}
      </ul>
    )
  }
}

export default Terminals;