import React from 'react'
import PropTypes from 'prop-types'
import './BasketPage.css'

const BasketPage = ({ basketProducts, totalPrice, productAmount, onDecrementClick, onIncrementClick, onEmptyBasketClick, onRemoveProductClick }) => {
    return (
        <div className="basket-page">
            <h2 className="header">Your Basket</h2>
            <div className="row">
                <div className="col-lg-9 col-sm-12 col-xs-12">
                    <div className="container">
                        <div className="row basket-table-header">
                            <div className="col-lg-10">
                                <div className="row">
                                    {productAmount} item{productAmount === 1 ? '' : 's'}
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="row">
                                    Quantity/Price
                                </div>
                            </div>
                        </div>
                        <ul>
                            {basketProducts.length
                                ? basketProducts.map(product => {
                                    return (
                                        <li className="row basket-product" key={product.productId}>
                                            <div className="col-lg-10">
                                                <img className="basket-product__img" alt={product.title} src={product.image} />
                                                {product.title}
                                                <svg onClick={() => { onRemoveProductClick(product) }} className="trash-icon" role="button" viewBox="0 0 24 24"><path d="M8 6l.001-1.51h.147a3.49 3.49 0 0 1 3.342-2.488L12.505 2a3.49 3.49 0 0 1 3.49 3.49v.065L15.987 6H20a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h4zm2.002 0h3.984v-.019l.01-.463V5.49A1.49 1.49 0 0 0 12.506 4l-1.015.002a1.49 1.49 0 0 0-1.49 1.489V6zM8.5 11a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm5 0a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm-9.447-.008a1 1 0 1 1 2 .016l-.055 7.094A1.886 1.886 0 0 0 7.88 20h8.237c1.04 0 1.883-.843 1.883-1.892l-.032-7.103a1 1 0 1 1 2-.01l.032 7.122A3.883 3.883 0 0 1 16.118 22H7.851a3.883 3.883 0 0 1-3.853-3.913l.055-7.095z" fill="#b8adad" fillRule="nonzero"></path></svg>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="row">
                                                    <button type="button" name={product.title + " decrement"} onClick={() => onDecrementClick(product)} className="btn btn-secondary">-</button>
                                                    <div className="basket-product__amount">{product.amount}</div>
                                                    <button type="button" name={product.title + " increment"} onClick={() => onIncrementClick(product)} className="btn btn-secondary" >+</button>
                                                </div>
                                                <div className="row">
                                                    &pound;{(Math.round(product.price * product.amount * 100) / 100)}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                                : <li className="row" style={{ marginTop: "10px" }}>
                                    <p>Your basket is empty</p>
                                </li>
                            }
                        </ul>
                        {basketProducts.length ?
                            <div className="row" style={{ margin: "20px" }}>
                                <button type="button" name="empty basket" className="btn btn-danger" onClick={() => onEmptyBasketClick()}>Empty basket</button>
                            </div>
                            : ''
                        }
                    </div>
                </div>

                {totalPrice != 0 &&
                    <div className="col-lg-3 col-sm-12 col-xs-12">
                        <div className="row">
                            <p style={{ margin: "auto" }}>Order summary</p>
                        </div>
                        <div className="row">
                            <p style={{ margin: "auto" }}>Total: &pound;{totalPrice}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

BasketPage.propTypes = {
    basketProducts: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    productAmount: PropTypes.number.isRequired,
    onDecrementClick: PropTypes.func,
    onIncrementClick: PropTypes.func,
    onEmptyBasketClick: PropTypes.func,
    onRemoveProductClick: PropTypes.func
}
export default BasketPage