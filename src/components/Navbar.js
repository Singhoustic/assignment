import React from 'react'
import logo from './../assets/user.png'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 " style={{ height: "50px", width: "100%", zIndex: "10" }}>
            <div className="d-flex justify-content-end align-items-center w-100 ">
                <img src={logo} alt="Account photo" style={{ height: "100%", width: "30px", filter: "invert(1)" }} />
                <a className="navbar-brand ms-3" href="/" >{props.title}</a>
            </div>
        </nav >
    )
}


export default Navbar
