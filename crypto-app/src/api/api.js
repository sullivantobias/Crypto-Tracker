/**
 * @name CoinGecko API V3 
 * @description methods to retrieve datas
 */

import { AVAILABLECURRENCIES, CRYPTOSLIST, GLOBAL, MARKETS } from "../constants/api";

export const fetchMarkets = async () => {
    const response = await fetch(MARKETS());
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