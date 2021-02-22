import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Header({ basket }) {
    
    // maybe add product amount value to store?
    let productAmount = 0
    for(let i=0; i<basket.length; i++) {
        productAmount += basket[i].amount
    }

    return (
        <div className="navbar navbar-light bg-light">
            <NavLink to="/">
                <div className="sainsburys-logo-container">
                    <img src="https://www.sainsburys.co.uk/assets/images/5TrheyQtjk6OXYZV6GvC1R_1465b369098512594f5d934fac5ae00f_sainsburys-logo.svg" alt="Sainsbury’s" width="204" height="40" className="sainsburys-logo"/>
                </div>
            </NavLink>
            <NavLink to="/trolley">
            <div className="header-basket-button-container">
                <button className="header-basket-button">
                Your basket {productAmount > 0 && "(" + productAmount + " item" }{productAmount <= 1 ? '' : 's'}{productAmount > 0 && ')'}
                </button>
            </div>
            </NavLink>
        </div>
    )
}

Header.propTypes = {
    basket: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { 
        basket: state.basket
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


