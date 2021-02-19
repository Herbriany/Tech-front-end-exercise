import React, { useState, useEffect } from 'react'
import { getProducts } from '../../api/pdpApi'

function ManageProductDisplayPage() {

    useEffect(() => {
        getProducts().then(_products => setProducts(_products))
        console.log(products)
    } , [])

    const [products, setProducts] = useState({})

    
    
    return (
        <div>
            Product Page
        </div>
    )
}

export default ManageProductDisplayPage
