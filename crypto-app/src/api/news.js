import { SPECIFIC_CRYPTO_NEWS } from "../constants/api";

export const fetchNews = async query => {
    const response = await fetch(SPECIFIC_CRYPTO_NEWS(query));
    const markets = await response.json();

    return markets;
}