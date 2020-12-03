import 'bootstrap';
import 'jquery';
import '../../scss/app.scss';
import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import entriesStore from "./EntriesStore";

const app = document.getElementById('app');
ReactDOM.render(<List entriesStore={entriesStore} />, app);
