import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Header({ totalProductCount }) {
    
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <NavLink to="/">
                    <div className="sainsburys-logo-container">
                        <img src="https://www.sainsburys.co.uk/assets/images/5TrheyQtjk6OXYZV6GvC1R_1465b369098512594f5d934fac5ae00f_sainsburys-logo.svg" alt="Sainsbury’s" width="204" height="40" className="sainsburys-logo"/>
                    </div>
                </NavLink>
                <NavLink to="/trolley">
                <div className="header-basket-button-container">
                    <button type="button" name="header basket" className="btn btn-warning header-basket-button">
                    Your basket {totalProductCount > 0 && "(" + totalProductCount + " item" }{totalProductCount <= 1 ? '' : 's'}{totalProductCount > 0 && ')'}
                    </button>
                </div>
                </NavLink>
            </nav>
        </header>
    )
}

Header.propTypes = {
    totalProductCount: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return { 
        totalProductCount: state.totalProductCount
    }
}

export default connect(mapStateToProps)(Header)


