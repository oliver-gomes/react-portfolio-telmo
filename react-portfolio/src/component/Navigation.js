import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "Services", "Portfolio"];
    const navLinks = sections.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });

    return (
      <div>
        <nav>
          <h2 className="logo">{this.props.LogoTitle}</h2>
          <ul>{navLinks}</ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
