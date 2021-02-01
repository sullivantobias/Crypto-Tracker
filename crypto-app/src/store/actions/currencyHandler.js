const changeCurrency = currency => {
    return {
        type: "CHANGE_CURRENCY",
        payload: currency
    }
}

export default {
    changeCurrency
}