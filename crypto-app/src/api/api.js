/**
 * @name CoinGecko API V3 
 * @description methods to retrieve datas
 */

import { AVAILABLECURRENCIES, CRYPTOSLIST, DETAILS, GLOBAL, MARKETS } from "../constants/api";

export const fetchMarkets = async (currency) => {
    const response = await fetch(MARKETS(currency));
    const markets = await response.json();

    return markets;
}

export const fetchCryptosList = async () => {
    const response = await fetch(CRYPTOSLIST);
    const cryptosList = await response.json();

    return cryptosList;
}

export const fetchGlobalInfos = async () => {
    const response = await fetch(GLOBAL);
    const globalInfos = await response.json();

    return globalInfos;
}

export const fetchAvailableCurrencies = async () => {
    const response = await fetch(AVAILABLECURRENCIES);
    const availableCurrencies = await response.json();

    return availableCurrencies;
}

export const fetchCurrencyDetails = async currency => {
    const response = await fetch(DETAILS(currency));
    const details = await response.json();

    return details;
}