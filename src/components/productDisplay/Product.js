import React from 'react'
import PropTypes from 'prop-types'

function Product({ product }) {
    return (
        <div className="col col-lg-3 col-sm-12 product">
            <img src={product.image}/>
            <p>{product.title}, {product.sku}</p>
            <p>&pound;{product.price}</p>
            <button>Add to Basket</button>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product
