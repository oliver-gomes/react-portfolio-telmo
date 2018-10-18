import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3> Services </h3>
        <h2> What We Offer </h2>
        <div className="row">
          <Icons
            myIcon={iconObj[0].icon}
            myTitle={iconObj[0].title}
            myDescription={iconObj[0].description}
          />
          <Icons
            myIcon={iconObj[1].icon}
            myTitle={iconObj[1].title}
            myDescription={iconObj[1].description}
          />
          <Icons
            myIcon={iconObj[2].icon}
            myTitle={iconObj[2].title}
            myDescription={iconObj[2].description}
          />
          <Icons
            myIcon={iconObj[3].icon}
            myTitle={iconObj[3].title}
            myDescription={iconObj[3].description}
          />
        </div>
      </div>
    );
  }
}

const iconObj = [
  {
    icon: <i class="fas fa-mobile" />,
    title: "Responsive",
    description: "This is info section"
  },
  {
    icon: <i class="fas fa-pen" />,
    title: "Redesigned",
    description: "This is info section"
  },
  {
    icon: <i class="fas fa-thumbs-up" />,
    title: "Favorited",
    description: "This is info section"
  },
  {
    icon: <i class="fas fa-question" />,
    title: "Question",
    description: "This is info section"
  }
];

class Icons extends Component {
  render() {
    return (
      <div>
        <span>{this.props.myIcon}</span>
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
      </div>
    );
  }
}

export default Services;
