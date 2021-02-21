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
                        Items
                        </div>
                        <div className="col col-lg-2">
                        Quantity/Price
                        </div>
                    </div>
                    { basketProducts.map(product =>{ 
                        return ( 
                            <div className="row" key={product.productId}>
                                <div className="col col-lg-10">
                                    <img src={product.image} />
                                </div>
                                <div className="col col-lg-2">
                                    &pound;{product.price}
                                </div>
                            </div>
                            )
                        })  
                    }
                </div>
                <div className="col col-lg-3 col-sm-12">
                    Order summary
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