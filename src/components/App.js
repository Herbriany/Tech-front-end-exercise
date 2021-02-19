import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './common/Header'
import ManageProductDisplayPage from './productDisplay/ManageProductDisplayPage'
import ManageBasketPage from './basketDisplay/ManageBasketPage'

function App()  {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={ManageProductDisplayPage} />
                <Route path="/trolley" component={ManageBasketPage} />
            </Switch>
        </div>
    )
}

export default App
