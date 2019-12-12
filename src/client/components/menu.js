import React from 'react';
import axios from 'axios';
import { cpus } from 'os';

export default class PersonList extends React.Component {
  state = {
    terminals: []
  }

  componentDidMount() {
    axios.get('/terminals')
      .then(res => {
        const terminals = res.data;
        this.setState({terminals});
      })
  }

  render() {
    return (
      <ul>
        { this.state.terminals.map(terminal => <li>{terminal.address}<br/>{terminal.latitude}<br/>{terminal.longitude}</li>)}
      </ul>
    )
  }
}