import React from 'react'

function BasketPage() {
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
                </div>
                <div className="col col-lg-3 col-sm-12">
                    Order summary
                </div>
            </div>
        </div>
    )
}

export default BasketPage