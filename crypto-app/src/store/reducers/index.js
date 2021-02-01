import currency from './currencyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currency
})

export default rootReducer