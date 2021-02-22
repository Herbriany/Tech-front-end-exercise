import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './common/Header'
import ManageProductDisplayPage from './productDisplay/ManageProductDisplayPage'
import ManageBasketPage from './basketDisplay/ManageBasketPage'
import PageNotFound from './PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App()  {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={ManageProductDisplayPage} />
                <Route path="/trolley" component={ManageBasketPage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={2000} hideProgressBar/>
        </div>
    )
}

export default App
