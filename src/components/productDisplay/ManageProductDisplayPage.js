import React, { useState, useEffect } from 'react'
import { getProducts } from '../../api/pdpApi'
import Spinner from '../common/Spinner'
import ProductDisplayPage from './ProductDisplayPage'

function ManageProductDisplayPage() {

    const [products, setProducts] = useState({})

    useEffect(() => {
        getProducts().then(_products => setProducts(_products))
    } , [])

    debugger
    
    return (
        <div>
            Product Page
            { 
                products.length === (0 || undefined)
                ? <Spinner /> 
                : <ProductDisplayPage products={products}/>
            }
        </div>
    )
}

export default ManageProductDisplayPage
