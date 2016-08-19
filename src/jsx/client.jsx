import React from "react";
import ReactDOM from "react-DOM";
import Layout from "./components/Layout.jsx";
import Footer from "./components/Footer.jsx";

//require('../css/style.css');
//require('../css/stickyfooter.css');

const app = document.getElementById('app');
const footer = document.getElementById('footer');

ReactDOM.render(<Layout/>, app);
ReactDOM.render(<Footer/>, footer);