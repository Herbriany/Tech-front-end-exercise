import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import SkipLinks from './SkipLinks'
import PropTypes from 'prop-types'

function ManageSkipLinks({ products, location }) {

    const [skipLinks, setSkipLinks] = useState([]);
    useEffect(() => {
        const skipLinkElements = document.querySelectorAll(
            "[data-skip-link]:not(pre):not(code)"
        );
        const links = Array.from(skipLinkElements, skipLink => ({
            title: skipLink.dataset.skipLink,
            id: skipLink.id
        }));

        setSkipLinks(links);
    }, [products, location.pathname]);

    return <SkipLinks links={skipLinks} />;
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

ManageSkipLinks.propTypes = {
    products: PropTypes.array,
    location: PropTypes.object
}

export default connect(mapStateToProps)(ManageSkipLinks)

