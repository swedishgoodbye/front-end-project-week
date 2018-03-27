import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import '../style/nav.css';


class Nav extends Component{
    render(){
        return(
            <navbar className="notes-nav">
                <header className="nav-title"> Lambda <br></br> Notes </header>
                <button className="nav-button"><Link to='/'> View Your Notes </Link></button>
                <button className="nav-button"> + Create New Notes </button>
                
            </navbar>
        )
    }
}

export default Nav;