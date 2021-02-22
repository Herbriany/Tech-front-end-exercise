import React from 'react'
import BasketPage from './BasketPage'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { incrementBasketProduct, emptyBasket } from '../../redux/actions/basketActions'

function ManageBasketPage({basketProducts, incrementBasketProduct, emptyBasket}) {

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

    function handleEmptyBasketClick() {
        debugger
        emptyBasket()
    }

    return (
        <BasketPage 
            basketProducts={basketProducts} 
            totalPrice={totalPrice} 
            productAmount={productAmount}
            onIncrementClick={handleIncrementClick} 
            onEmptyBasketClick={handleEmptyBasketClick}
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
    emptyBasket
}

ManageBasketPage.propTypes = {
    basketProducts: PropTypes.array.isRequired,
    incrementBasketProduct: PropTypes.func,
    emptyBasket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBasketPage)
