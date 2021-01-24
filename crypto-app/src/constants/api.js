
const ENDPOINT = "https://api.coingecko.com/api/v3/"

/**
 * @name Coins
 */

// Complex //
export const MARKETS = (currency = USD, order = 'market_cap_desc', perPage = '100', page = '1', sparkline = 'false') => `${ENDPOINT}coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}`;

// Simple
export const CRYPTOSLIST = `${ENDPOINT}coins/list`
export const GLOBAL = `${ENDPOINT}global`
/**
 * @name Currencies
 */
export const USD = 'usd';