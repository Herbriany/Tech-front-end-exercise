import React from 'react'
import PropTypes from 'prop-types'
import ManageProduct from './ManageProduct'

function ProductDisplayPage({ products }) {
    return (
        <main role="main" data-skip-link="Go to Products" id="products" className="container">
            <h1 className="header header--products">Products</h1>
            <div className="row">
                {
                    products.map(product => <ManageProduct product={product} key={product.productId} />)
                }
            </div>
        </main>
    )
}

ProductDisplayPage.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductDisplayPage
