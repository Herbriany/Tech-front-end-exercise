import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Header.css'

function Header({ totalProductCount }) {

    return (
        <header role="banner" data-skip-link="Go to Header" id="header">
            <nav role="navigation" className="navbar navbar-light bg-light">
                <h2 className="navbar__title visually-hidden">Main Navigation</h2>
                <NavLink to="/" exact>
                    <div className="logo">
                        <img src="https://www.sainsburys.co.uk/assets/images/5TrheyQtjk6OXYZV6GvC1R_1465b369098512594f5d934fac5ae00f_sainsburys-logo.svg" alt="Sainsbury’s" width="204" height="40" className="logo__image" />
                    </div>
                </NavLink>
                <NavLink to="/trolley" exact>
                    <div className="header-basket">
                        <button type="button" name="header basket" className="btn btn-warning header-basket__button" tabIndex="-1">
                            Your basket {totalProductCount > 0 && "(" + totalProductCount + " item"}{totalProductCount <= 1 ? '' : 's'}{totalProductCount > 0 && ')'}
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


