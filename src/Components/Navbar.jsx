import React , {useState, useEffect} from "react"
import {motion} from "framer-motion"
import * as Icons from "react-icons/fa"
import "./Navbar.css"
import Home from "./Home"
import Menu from "./Menu"
import Deal from "./Deal"
import Franchise from "./Franchise"
import About from "./About"
import Contact from "./Contact"

import {Link} from "react-router-dom"
import texD from "./textd.css"
import logo from "./logo.css"


function Navbar()
{
    const [sidebar, setsidebar] = useState(false);

    return (
            <nav className="navbar">
                <Link to="/" className="logo" style={logo}><img src="/picsrc/logo.png" alt="" /></Link>
                <ul className="nav_menu">
                    <li> <Link to="/" className="nav_item" style={texD}>HOME</Link></li>
                    <li> <Link to="/Menu" className="nav_item" style={texD}>MENU</Link></li>
                    <li> <Link to="/Deal" className="nav_item" style={texD}>DEALS & REWARDS</Link></li>
                    <li> <Link to="/Franchise" className="nav_item" style={texD}>FRANCHISE</Link></li>
                    <li> <Link to="/About" className="nav_item" style={texD}>ABOUT US</Link></li>
                    <li> <Link to="/Contact" className="nav_item" style={texD}>CONTACT US</Link></li>
                
                </ul>
                <div onClick = {() =>{setsidebar(!sidebar)}} 
                    className="sidebar-toggle">
                    {sidebar ? <><Icons.FaTimes/> <div className="newdiv">
                        <ul className="nav_menu_after">
                            <li> <Link to="/" className="nav_item" style={texD}>HOME</Link></li>
                            <li> <Link to="/Menu" className="nav_item" style={texD}>MENU</Link></li>
                            <li> <Link to="/Deal" className="nav_item" style={texD}>DEALS & REWARDS</Link></li>
                            <li> <Link to="/Franchise" className="nav_item" style={texD}>FRANCHISE</Link></li>
                            <li> <Link to="/About" className="nav_item" style={texD}>ABOUT US</Link></li>
                            <li> <Link to="/Contact" className="nav_item" style={texD}>CONTACT US</Link></li>
                        </ul>

                    </div>
                    </>: <Icons.FaBars/>}
                    

                </div>


            </nav>
    );
}

export default Navbar;
