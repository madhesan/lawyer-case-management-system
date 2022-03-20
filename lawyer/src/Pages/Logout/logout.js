import React, { Component } from 'react'

export default class Logout1 extends Component {

  logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  }
  
  render() {
    return (
        <div>
            
        </div>
    )
  }
}