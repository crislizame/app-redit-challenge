import React, { Component } from "react";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

import App from "../app";


export default class Setup extends Component {
  constructor() {
    super();
  }
  
  
  componentDidMount() {

  }
  render() {
    return (
          <App />
    );
  }
}
