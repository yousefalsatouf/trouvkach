/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by Yousef
 * started at 06/09/2019
 */

import React, {Component} from "react";
import axios from 'axios'

class Data extends Component {
    constructor() {
        super();
        this.state({
            banks: [],
            terminals: [],
        });
    }

    componentDidMount() {
        axios.get('http://localhost:81/index.js')
            .then(res => {
                this.setState({ banks: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.banks.map((bank, i) => {
            return <DataTable obj={bank} key={i} />;
        });
    }

    render() {
        return (
            <div className={"App"}>
                <h1>Banks</h1>
                {this.state.banks.map(bank => (
                    <div key={bank.id}>bank: {bank.name}</div>
                ))}
            </div>
        );
    }
}

export default Data;
