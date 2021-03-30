import React from 'react'
import PropTypes from 'prop-types'
import './BasketPage.css'

const BasketPage = ({ basketProducts, totalPrice, productAmount, onDecrementClick, onIncrementClick, onEmptyBasketClick, onRemoveProductClick }) => {
    return (
        <main role="main" className="basket-page" data-skip-link="Go to Basket" id="basket">
            <h1 className="header header--basket">Your Basket</h1>
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
                        <ul className="basket-list">
                            {basketProducts.length
                                ? basketProducts.map(product => {
                                    return (
                                        <li className="row basket-product" key={product.productId}>
                                            <div className="col-lg-10">
                                                <img className="basket-product__img" alt={product.title} src={product.image} />
                                                <span className="basket-product__title">{product.title}</span>
                                                <button className="basket-product__trash-button" onClick={() => { onRemoveProductClick(product) }} aria-label={"Delete all" + product.title}>
                                                    <svg className="basket-product__trash-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M8 6l.001-1.51h.147a3.49 3.49 0 0 1 3.342-2.488L12.505 2a3.49 3.49 0 0 1 3.49 3.49v.065L15.987 6H20a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h4zm2.002 0h3.984v-.019l.01-.463V5.49A1.49 1.49 0 0 0 12.506 4l-1.015.002a1.49 1.49 0 0 0-1.49 1.489V6zM8.5 11a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm5 0a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm-9.447-.008a1 1 0 1 1 2 .016l-.055 7.094A1.886 1.886 0 0 0 7.88 20h8.237c1.04 0 1.883-.843 1.883-1.892l-.032-7.103a1 1 0 1 1 2-.01l.032 7.122A3.883 3.883 0 0 1 16.118 22H7.851a3.883 3.883 0 0 1-3.853-3.913l.055-7.095z" fill="#b8adad" fillRule="nonzero"></path></svg>
                                                </button>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="row">
                                                    <button type="button" name={product.title + " decrement"} aria-label={product.title + " decrement"} onClick={() => onDecrementClick(product)} className="btn btn-secondary">-</button>
                                                    <div className="basket-product__amount">{product.amount}</div>
                                                    <button type="button" name={product.title + " increment"} aria-label={product.title + " increment"} onClick={() => onIncrementClick(product)} className="btn btn-secondary" >+</button>
                                                </div>
                                                <div className="row">
                                                    <p>&pound;{(Math.round(product.price * product.amount * 100) / 100)}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                                : <li className="row basket-list__empty-item">
                                    <p>Your basket is empty</p>
                                </li>
                            }
                        </ul>
                        {basketProducts.length ?
                            <div className="container--empty-basket-button">
                                <button type="button" name="empty basket" className="btn btn-danger" onClick={() => onEmptyBasketClick()}>Empty basket</button>
                            </div>
                            : ''
                        }
                    </div>
                </div>

                {totalPrice != 0 &&
                    <div className="col-lg-3 col-sm-12 col-xs-12 basket-summary">
                        <p className="row basket-summary__title">Order summary</p>
                        <p className="row basket-summary__total">Total: &pound;{totalPrice}</p>
                    </div>
                }
            </div>
        </main>
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