import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

function ProductDisplayPage({ products }) {
    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <Product product={product} key={product.productId}/>)
                }
            </div>
        </div>
    )
}

ProductDisplayPage.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductDisplayPage
