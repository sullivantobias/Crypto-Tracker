/**
 * @name CoinGecko API V3 
 * @description methods to retrieve datas
 */

import { CRYPTOSLIST, MARKETS } from "../constants/api";

export const fetchMarkets = async () => {
    const response = await fetch(MARKETS());
    const markets = await response.json();

    console.log(markets);
}

export const fetchCryptosList = async () => {
    const response = await fetch(CRYPTOSLIST);
    const cryptosList = await response.json();

    console.log(cryptosList);
}