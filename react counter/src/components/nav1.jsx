import React from "react";
import "./nav1.css" 

export default function Nav1() {
    return (
        <header>
                <h4>Business Name</h4>
                <nav className="nav">
                    <ul >
                        <li className="nav--Button1"><a>Services</a></li>
                        <li className="nav--Button1"><a>Projects</a></li>
                        <li className="nav--Button1"><a>About Us</a></li>
                    </ul>
                </nav>
                <button className="nav--Button2">Contact Us</button>
        </ header>
    )
}