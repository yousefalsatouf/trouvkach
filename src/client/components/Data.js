/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by Yousef
 * started at 06/09/2019
 */

import React, {Component} from "react";
import axios from "axios";
const API_URL = "/terminals";

class Data extends Component {
    state = {
        terminals: [],
    };

    componentDidMount() {
        axios.get(API_URL)
            .then(response => response.data)
            .then(data => {
                this.setState({terminals: data.map(tem=>tem.bankDetails)});
            });
    }

    render() {
        return (
            <div className={"App"}>
                <h1>Hello from react, client side</h1>
                {this.state.terminals.map(terminal => (
                    <div key={terminal.id}>terminal: {terminal.bankDetails}</div>
                ))}
            </div>
        );
    }
}

export default Data;
