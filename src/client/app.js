/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Carte from './components/map';
import '../style.css';
import '../../node_modules/leaflet/dist/leaflet.css';

ReactDOM.render(<Carte/>, document.querySelector('#app'));
