import React from 'react'
import BasketPage from './BasketPage'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { decrementBasketProduct, incrementBasketProduct, emptyBasket, removeProduct } from '../../redux/actions/basketActions'


function ManageBasketPage({basketProducts, decrementBasketProduct, incrementBasketProduct, emptyBasket, removeProduct}) {

    // find array method for this
    let totalPrice = 0
    let productAmount = 0
    for(let i=0; i<basketProducts.length; i++) {
        totalPrice += (basketProducts[i].price * basketProducts[i].amount)
        productAmount += basketProducts[i].amount
    }
    totalPrice = Math.round(totalPrice * 100) / 100
        
    function handleIncrementClick(product) {
        incrementBasketProduct(product)
    }

    function handleDecrementClick(product) {
        product.amount <= 1 ? 
        removeProduct(product) :
        decrementBasketProduct(product)
    }

    function handleEmptyBasketClick() {
        emptyBasket()
    }

    function handleRemoveProductClick(product) {
        removeProduct(product)
    }

    return (
        <BasketPage 
            basketProducts={basketProducts} 
            totalPrice={totalPrice} 
            productAmount={productAmount}
            onIncrementClick={handleIncrementClick} 
            onEmptyBasketClick={handleEmptyBasketClick}
            onDecrementClick={handleDecrementClick} 
            onRemoveProductClick={handleRemoveProductClick}
        />
    )
}
function mapStateToProps(state) {
    return { 
        basketProducts: state.basket
    }
}

const mapDispatchToProps = {
    incrementBasketProduct,
    decrementBasketProduct,
    emptyBasket,
    removeProduct
}

ManageBasketPage.propTypes = {
    basketProducts: PropTypes.array.isRequired,
    incrementBasketProduct: PropTypes.func,
    decrementBasketProduct: PropTypes.func,
    emptyBasket: PropTypes.func,
    removeProduct: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBasketPage)
