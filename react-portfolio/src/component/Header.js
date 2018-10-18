import React, { Component } from 'react';
import Background from '../background.jpg'
import './Header.css'

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    backgroundSize: 'cover'
} 


class Header extends Component {
    
    render(){
        return (
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>A Simple Portfolio created with React</p>
                <a href="#header" >{this.props.button}</a>
            </header>
        )
    }
}

export default Header;