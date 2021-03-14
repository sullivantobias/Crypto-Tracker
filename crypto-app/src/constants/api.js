
const ENDPOINT = "https://api.coingecko.com/api/v3/"

/**
 * @name Coins
 */

// Complex //
export const MARKETS = (currency = 'usd', page = '1', order = 'market_cap_desc', perPage = '20', sparkline = true) => `${ENDPOINT}coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}`;
export const DETAILS = currency => `${ENDPOINT}coins/${currency}`
export const MARKET_CHART = (crypto, currency, time) => `${ENDPOINT}coins/${crypto}/market_chart?vs_currency=${currency}&days=${time}`

// Simple
export const CRYPTOSLIST = `${ENDPOINT}coins/list`
export const GLOBAL = `${ENDPOINT}global`
export const AVAILABLECURRENCIES = `${ENDPOINT}simple/supported_vs_currencies`


/**
 * @name News
 */

export const API_KEY = 'f6956d3cd1b040759e3bda7347ca1157'

export const SPECIFIC_CRYPTO_NEWS = (query, numberItemsDisplayed = 3, page = 1) => `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${numberItemsDisplayed}&page=${page}`
