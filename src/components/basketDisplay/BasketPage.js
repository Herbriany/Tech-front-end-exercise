import React from 'react'
import PropTypes from 'prop-types'

function BasketPage({basketProducts, totalPrice}) {
    return (
        <div className="basketPage">
            <h2>Basket Page</h2>
            <div className="row"> 
                <div className="col col-lg-9 col-sm-12">
                    <div className="row">
                        <div className="col col-lg-10">
                            <div className="row">
                                Items
                            </div>
                        </div>
                        <div className="col col-lg-2">
                            <div className="row">
                                Quantity/Price
                            </div>
                        </div>
                    </div>
                    { basketProducts.map(product =>{ 
                        return ( 
                            <div className="row" key={product.productId}>
                                <div className="col col-lg-10">
                                    <img src={product.image} />
                                    {product.title}
                                </div>
                                <div className="col col-lg-2">
                                    <div className="row">
                                        <button className="btn btn-secondary">-</button>
                                            <div className="basket-product-amount">{product.amount}</div>
                                        <button className="btn btn-secondary" >+</button>
                                    </div>
                                    <div className="row">
                                        &pound;{product.price*product.amount}
                                    </div>
                                </div>
                            </div>
                            )
                        })  
                    }
                </div>
                <div className="col col-lg-3 col-sm-12">
                    <div className="row">
                        Order summary
                    </div>
                    <div className="row">
                    Total: &pound;{totalPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

BasketPage.propTypes = {
    basketProducts: PropTypes.array,
    totalPrice: PropTypes.number
}
export default BasketPage