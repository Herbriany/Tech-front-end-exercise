import { combineReducers } from 'redux'
import products from './productReducer'
import basket from './basketReducer'
import totalProductCount from './totalProductCountReducer'
import apiStatus from './apiStatusReducer'

const rootReducer = combineReducers({
    products,
    basket,
    totalProductCount,
    apiStatus
})

export default rootReducer