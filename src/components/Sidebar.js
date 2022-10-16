import React, { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from './../assets/logo.png'

const menuItems = [
    {
        path: "home",
        name: "Dashboard",
        icon: <i className="fa-solid fa-gauge"></i>,
    },
    {
        path: "earning",
        name: "Earning",
        icon: <i className="fa-solid fa-money-check-dollar"></i>,
    },
    {
        path: "page",
        name: "Projects",
        icon: <i className="fa-solid fa-tarp"></i>,
    },
    {
        path: "tickets",
        name: "Tickets",
        icon: <i className="fa-solid fa-ticket-simple"></i>,
    }

]


const Sidebar = (props) => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const toggle = () => { setText(!isOpen ? "Close" : ""); props.setPadding(isOpen ? "70px" : "300px"); setIsOpen(!isOpen); }
    return (
        <>

            <div className="sideContainer position-fixed"   >
                <div className="sidebar" style={{ width: isOpen ? "300px" : "70px" }}>
                    <div className="top_section">
                        <img src={logo} alt="logo" />
                        <h3 className="logo" style={{ display: isOpen ? "block" : "none" }}></h3>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className={`bars ${isOpen ? "ms-auto" : "ms-0"}`} >
                                <span className="me-2" style={{ fontSize: "20px" }}>{text}</span>
                                <i className="fa-solid fa-bars me-2 mt-1" onClick={toggle} ></i>

                            </div>
                        </div>
                    </div>

                    {
                        menuItems.map((item, index) => {
                            return <NavLink key={index}>
                                <Link to={item.path} className={`link ${location.pathname.includes(item.path) ? 'active' : ""}`}>
                                    <div className="icon">{item.icon}</div>
                                    <div className="text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                                </Link>
                            </NavLink>

                        }
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Sidebar
