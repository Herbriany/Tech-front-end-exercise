import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="navbar navbar-light bg-light">
            <NavLink to="/">
                <div className="sainsburys-logo-container">
                    <img src="https://www.sainsburys.co.uk/assets/images/5TrheyQtjk6OXYZV6GvC1R_1465b369098512594f5d934fac5ae00f_sainsburys-logo.svg" alt="Sainsbury’s" width="204" height="40" className="sainsburys-logo"/>
                </div>
            </NavLink>
            <NavLink to="/trolley">
            <div className="header-basket-button-container">
                <button className="header-basket-button">Your basket</button>
            </div>
            </NavLink>
        </div>
    )
}

export default Header


