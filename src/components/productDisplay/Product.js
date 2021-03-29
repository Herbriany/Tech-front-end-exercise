import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'

function Product({ product, onAddProductClick }) {
    return (
        <div className="col-lg-3 col-sm-12 col-md-12">
            <div className="container product">
                <div className="product__information">
                    <img alt={product.title} src={product.image} />
                    <p>{product.title}, {product.sku}</p>
                </div>
                <p>&pound;{product.price}</p>
                <button type="button" name={product.title} className="btn btn-outline-secondary" aria-label={"Add" + product.title + "to basket. Priced " + product.price} onClick={() => onAddProductClick(product)}>Add to Basket</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    onAddProductClick: PropTypes.func.isRequired
}

export default Product
