
const ENDPOINT = "https://api.coingecko.com/api/v3/"

/**
 * @name Coins
 */

// Complex //
export const MARKETS = (currency = 'usd', order = 'market_cap_desc', perPage = '100', page = '1', sparkline = true) => `${ENDPOINT}coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}`;

// Simple
export const CRYPTOSLIST = `${ENDPOINT}coins/list`
export const GLOBAL = `${ENDPOINT}global`
export const AVAILABLECURRENCIES = `${ENDPOINT}simple/supported_vs_currencies`
