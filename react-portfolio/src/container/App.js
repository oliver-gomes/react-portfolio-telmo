import React, { Component } from "react";
import "./App.css";
import Navigation from "../component/Navigation";
import Header from "../component/Header";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation LogoTitle="Oliver Gomes" />
        <Header title="React Portfolio" button="Find Out More" />
        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default App;
