export const formatNumbers = (currency, number, fixed = 2, isSymbol = true) => {
    const formattedNumber = number && new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number.toFixed(fixed))
    const formattedNumberNoSymbol = number && new Intl.NumberFormat({ style: 'currency', currency }).format(number.toFixed(fixed))

    return isSymbol ? formattedNumber : formattedNumberNoSymbol;
}