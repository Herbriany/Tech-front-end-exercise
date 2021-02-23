import React from 'react'
import BasketPage from './BasketPage'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { decrementBasketProduct, incrementBasketProduct, emptyBasket, removeProduct } from '../../redux/actions/basketActions'


export function ManageBasketPage({basketProducts, decrementBasketProduct, incrementBasketProduct, emptyBasket, removeProduct, totalProductCount}) {

    let totalPrice = basketProducts.reduce((price, product) => {
        return price += (product.price * product.amount)
    }, 0)
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
            productAmount={totalProductCount}
            onIncrementClick={handleIncrementClick} 
            onEmptyBasketClick={handleEmptyBasketClick}
            onDecrementClick={handleDecrementClick} 
            onRemoveProductClick={handleRemoveProductClick}
        />
    )
}
function mapStateToProps(state) {
    return { 
        basketProducts: state.basket,
        totalProductCount: state.totalProductCount
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
    removeProduct: PropTypes.func,
    totalProductCount: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBasketPage)
