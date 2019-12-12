/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import HelloWorld from "./components/hello";
import Data from "./components/Data";

ReactDOM.render(
    <BrowserRouter>
        <Data />
    </BrowserRouter>,
    document.querySelector("#app"),
);
