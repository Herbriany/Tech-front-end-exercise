import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Product from './Product'
import { addProductToBasket } from '../../redux/actions/basketActions'

function ManageProduct({addProductToBasket, product}) {

    function handleAddProductClick(product) {
        addProductToBasket(product)
    }

    return (
        <>
            <Product product={product} onAddProductClick={handleAddProductClick}/>
        </>
    )
}

function mapStateToProps() {
    return { 
    }
}

const mapDispatchToProps = {
    addProductToBasket
}

ManageProduct.propTypes = {
    product: PropTypes.object.isRequired,
    addProductToBasket: PropTypes.func.isrequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct)
