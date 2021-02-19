import React from 'react'
import PropTypes from 'prop-types'

function ProductDisplayPage({ products }) {
    debugger
    return (
        <div>
            {
                products.map(product => {
                    return <img src={product.image} key={product.title}/>
                })
            }
        </div>
    )
}

ProductDisplayPage.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductDisplayPage
