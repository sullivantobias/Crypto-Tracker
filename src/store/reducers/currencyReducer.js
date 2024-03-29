const currency = (state = { currency: 'usd' }, action) => {
    switch (action.type) {
        case "CHANGE_CURRENCY":
            return { ...state, currency: action.payload }
        case "FETCH_CURRENCIES":
            return { ...state, currencies: action.payload }
        default:
            return state
    }
}

export default currency