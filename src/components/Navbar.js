import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.isDark} bg-${props.isDark}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="btn rounded-circle mx-3" style={{height: '30px', width: '30px', backgroundColor:'red', border: '2px solid', borderColor: 'black'}} onClick={()=>{props.toggleMode("reddish")}}></div>
                    <div className="btn rounded-circle" style={{height: '30px', width: '30px', backgroundColor:'green', border: '2px solid', borderColor: 'black'}} onClick={()=>{props.toggleMode("greenish")}}></div>
                    <div className="btn rounded-circle mx-3" style={{height: '30px', width: '30px', backgroundColor:'yellow', border: '2px solid', borderColor: 'black'}} onClick={()=>{props.toggleMode("yellowish")}}></div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input"
                         checked={props.mode==='dark'}
                         onChange={(e)=>{props.toggleMode(e.target.checked===true?'light':'dark')}} 
                         type="checkbox" 
                         id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };