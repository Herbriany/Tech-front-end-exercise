import React from "react";
import PropTypes from 'prop-types'

export default function SkipLinks({ links }) {
    return (
        links.map(link => (
            <a key={link.title} className="visually-hidden" href={"#" + link.id}>
                {link.title}
            </a>
        ))
    );
}

SkipLinks.propTypes = {
    links: PropTypes.array.isRequired
}