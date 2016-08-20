import React from "react";
import ReactDOM from "react-DOM";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import SetLinkModal from "./components/Modal/SetLinkModal";

//require('../css/style.css');
//require('../css/stickyfooter.css');

const app = document.getElementById('app');
const footer = document.getElementById('footer');
const setLinkModal = document.getElementById('setLinkModal');

ReactDOM.render(<Layout/>, app);
ReactDOM.render(<Footer/>, footer);
ReactDOM.render(<SetLinkModal/>, setLinkModal);