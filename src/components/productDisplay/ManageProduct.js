import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Product from './Product'
import { addProductToBasket, incrementBasketProduct } from '../../redux/actions/basketActions'
import { toast } from 'react-toastify'

function ManageProduct({addProductToBasket, incrementBasketProduct, product, basket}) {

    function handleAddProductClick(product, basketState=basket) {
        const basketProduct = basketState.find(_product => _product.productId === product.productId)
        basketProduct != undefined ? incrementBasketProduct(basketProduct) : addProductToBasket(product)
        toast.success(`${product.title} added to your basket!`)
    }

    return (
        <>
            <Product product={product} onAddProductClick={handleAddProductClick}/>
        </>
    )
}

function mapStateToProps(state) {
    return { 
        basket: state.basket
    }
}

const mapDispatchToProps = {
    addProductToBasket,
    incrementBasketProduct
}

ManageProduct.propTypes = {
    product: PropTypes.object.isRequired,
    basket: PropTypes.array,
    addProductToBasket: PropTypes.func.isRequired,
    incrementBasketProduct: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct)
