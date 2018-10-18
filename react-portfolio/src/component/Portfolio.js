import React, { Component } from "react";
import Picture1 from "../img/pic03.jpg";
import Picture2 from "../img/pic04.jpg";
import Picture3 from "../img/pic05.jpg";
import Picture4 from "../img/pic06.jpg";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="port-wrap">
        <h3> Portfolio </h3>
        <h2> Check Our Work </h2>
        <div className="picture">
          <img src={Picture1} />
          <img src={Picture2} />
          <img src={Picture3} />
          <img src={Picture4} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
