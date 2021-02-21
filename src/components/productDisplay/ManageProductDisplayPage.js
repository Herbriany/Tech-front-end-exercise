import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../common/Spinner'
import ProductDisplayPage from './ProductDisplayPage'
import { loadProducts } from '../../redux/actions/productActions'
import PropTypes from 'prop-types'

function ManageProductDisplayPage({products, basket, loadProducts}) {

    useEffect(() => {
        if (!products.length){ 
            loadProducts()
            .catch(error => console.log(error))
        }
    } , [])

    return (
        <>
            { 
                products.length === (0 || undefined)
                ? <Spinner /> 
                : <ProductDisplayPage products={products} basket={basket}/>
            }
        </>
    )
}

function mapStateToProps(state) {
    return { 
        products: state.products,
        basket: state.basket
    }
}

const mapDispatchToProps = {
    loadProducts
}

ManageProductDisplayPage.propTypes = {
    products: PropTypes.array.isRequired,
    basket: PropTypes.array.isRequired,
    loadProducts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductDisplayPage)
