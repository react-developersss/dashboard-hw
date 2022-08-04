import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i onClick={this.props.onToggle} className="fa-solid fa-bars"></i>
        <h1>Navbar</h1>
      </div>
    )
  }
}

export default Navbar;