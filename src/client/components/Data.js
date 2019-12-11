/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by Yousef
 * started at 06/09/2019
 */

import React, { Component } from 'react';

class  Data extends Component
{
    constructor()
    {
        super();
        this.state({
            banks: [],
            terminals: [],
        });
    }

    componentDidMount() {
        fetch("/banks")
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(banks => {
                console.log(banks);
                this.setState({ banks })
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Banks</h1>
                {this.state.banks.map(bank =>
                    <div key={bank.id}>bank: {bank.name}</div>
                )}
            </div>
        );
    }
}

export default Data;

