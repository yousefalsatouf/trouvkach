import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    terminals: []
  }
 
  render() {
    axios.get(`/${this.props.lat}/${this.props.long}`)
    .then(res => {
      const terminals = res.data;
      this.setState({terminals});
    })
    return (
      <ul>
        { this.state.terminals.map(terminal => <li><a href={terminal.bankDetails[0].url} target="_blank">{terminal.bankDetails[0].name}</a><br/>{terminal.address}</li>)}
      </ul>
    )
  }
}