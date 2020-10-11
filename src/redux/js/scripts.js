import 'bootstrap';
import 'jquery';
import '../../scss/app.scss';
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import List from "./components/List";
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <List />
</Provider>, app);
