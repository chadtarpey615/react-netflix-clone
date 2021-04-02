import React, { useState, useEffect } from 'react';
import "./nav.css";

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/12401199904155"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Navbar
