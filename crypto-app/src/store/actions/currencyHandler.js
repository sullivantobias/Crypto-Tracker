const changeCurrency = currency => {
    return {
        type: "CHANGE_CURRENCY",
        payload: currency
    }
}

const fetchCurrencies = currencies => {
    return {
        type: "FETCH_CURRENCIES",
        payload: currencies
    }
}

export default {
    changeCurrency,
    fetchCurrencies
}