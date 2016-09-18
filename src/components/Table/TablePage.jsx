import React from "react"
import { Provider } from "react-redux"
import store from "../../redux/store";

import NavBarAndContent from "../NavBarAndContent"

export default class TablePage extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <NavBarAndContent isSearhPage={false}/>
      </Provider>
    );
  }
}