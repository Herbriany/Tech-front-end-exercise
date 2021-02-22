import { combineReducers } from 'redux'
import products from './productReducer'
import basket from './basketReducer'
import totalProductCount from './totalProductCountReducer'

const rootReducer = combineReducers({
    products,
    basket,
    totalProductCount
})

export default rootReducer