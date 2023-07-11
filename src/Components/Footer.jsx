import "./Footer.css";
import React from "react"
import {Link} from "react-router-dom"
import texD from "./textd.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer_logo">
            <img src="/picsrc/logo.png"/>
        </div>
        <div className="nav_footer">
            <ul className="nav_menu_footer">
                <li> <Link to="/" className="nav_item" style={texD}>HOME</Link></li>
                <li> <Link to="/Menu" className="nav_item" style={texD}>MENU</Link></li>
                <li> <Link to="/Deal" className="nav_item" style={texD}>DEALS & REWARDS</Link></li>
                <li> <Link to="/Franchise" className="nav_item" style={texD}>FRANCHISE</Link></li>
                <li> <Link to="/About" className="nav_item" style={texD}>ABOUT US</Link></li>
                <li> <Link to="/Contact" className="nav_item" style={texD}>CONTACT US</Link></li>
            </ul>
        </div>
            <div className="socialhandle">
                <a href="https://instagram.com/og.momos?igshid=Y2IzZGU1MTFhOQ==">
                <img className= "instagram" src="/picsrc/instagram.png" alt="" />
                </a>
                {/* <a href="https://instagram.com/og.momos?igshid=Y2IzZGU1MTFhOQ==">
                <img className="facebook" src="/picsrc/facebook.png" alt="" />
                </a> */}
                <a href="https://instagram.com/og.momos?igshid=Y2IzZGU1MTFhOQ==">
                    <img  className="thread" src="/picsrc/thread.webp" alt="" />
                </a>
                <h1>@2023 OGMOMO. ALL RIGHTS RESERVED</h1>
            </div>

</div>
  )
}
