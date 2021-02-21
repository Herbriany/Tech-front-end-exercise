import React from 'react'
import BasketPage from './BasketPage'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function ManageBasketPage({basketProducts}) {

    
    let totalPrice = 0
    for(let i=0; i<basketProducts.length; i++) {
        totalPrice += basketProducts[i].price
    }
        
    return (
        <BasketPage basketProducts={basketProducts} totalPrice={totalPrice}/>
    )
}
function mapStateToProps(state) {
    return { 
        basketProducts: state.basket
    }
}

const mapDispatchToProps = {
}

ManageBasketPage.propTypes = {
    basketProducts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBasketPage)
