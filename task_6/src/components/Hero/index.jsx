
import React, { Component } from "react";
import Header from "../Header";
import HomePage from "../HomePage";
import Main from "../Main Section/Main";
import Choos from '../Choos section/index'
import Middle from "../MidlleSection";

export default class Home extends Component{
  render(){
    return(
      <div>
        <Header/>
        <HomePage/>
        <Main/>
        <Choos/>
        <Middle/>
      </div>
    )
  }
}