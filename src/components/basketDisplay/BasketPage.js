import React from 'react'
import PropTypes from 'prop-types'

function BasketPage({basketProducts, totalPrice, productAmount, onIncrementClick, onEmptyBasketClick }) {
    return (
        <div className="basketPage">
            <h2>Your Trolley</h2>
            <div className="row"> 
                <div className="col col-lg-9 col-sm-12">
                    <div className="row">
                        <div className="col col-lg-10">
                            <div className="row">
                                {productAmount} item{productAmount === 1 ? '' : 's'}
                            </div>
                        </div>
                        <div className="col col-lg-2">
                            <div className="row">
                                Quantity/Price
                            </div>
                        </div>
                    </div>
                    {basketProducts.length 
                        ? basketProducts.map(product =>{ 
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
                                        <button onClick={() => onIncrementClick(product)} className="btn btn-secondary" >+</button>
                                    </div>
                                    <div className="row">
                                        &pound;{(Math.round(product.price*product.amount*100)/100)}
                                    </div>
                                </div>
                            </div>
                            )
                        })
                        :<div className="row">   
                            <p>Your basket is empty</p>
                        </div>
                    }
                    {basketProducts.length ?
                        <div className="row" style={{marginTop: "10px"}}>
                            <button className="btn btn-danger" onClick={() => onEmptyBasketClick()}>Empty basket</button>
                        </div>
                        : ''
                    }
                </div>
                
                {totalPrice != 0 &&
                <div className="col col-lg-3 col-sm-12">
                    <div className="row">
                        Order summary
                    </div>
                    <div className="row">
                    Total: &pound;{totalPrice}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

BasketPage.propTypes = {
    basketProducts: PropTypes.array,
    totalPrice: PropTypes.number.isRequired,
    productAmount: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func,
    onEmptyBasketClick: PropTypes.func
}
export default BasketPage