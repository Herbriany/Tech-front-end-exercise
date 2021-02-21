import { combineReducers } from 'redux'
import products from './productReducer'
import basket from './basketReducer'

const rootReducer = combineReducers({
    products,
    basket
})

export default rootReducer