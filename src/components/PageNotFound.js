import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PageNotFound(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 - {props.location.pathname.slice(1, )} Page Not Found</h2>
                        <div className="btn btn-light"><Link to="/">Home Page</Link> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PageNotFound.propTypes = {
    location: PropTypes.object.isRequired
}

export default PageNotFound
