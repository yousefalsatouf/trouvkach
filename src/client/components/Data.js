/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by Yousef
 * started at 06/09/2019
 */

import React, {Component} from "react";
import axios from "axios";
const API_URL = 'http://localhost:81/banks';

class Data extends Component
{
    state = {
        banks: [],
        terminals: [],
    };

    componentDidMount()
    {
        axios.get(API_URL).then(response => response.data)
            .then((data) => {
                this.setState({ banks: data.banks })
                console.log(this.state.banks)
            });
    }

    render() {
        return (
            <div className={"App"}>
                <h1>Hello from react, client side</h1>
                {this.state.banks.map(bank => (
                    <div key={bank.id}>bank: {bank.name}</div>
                ))}
            </div>
        );
    }
}

export default Data;
