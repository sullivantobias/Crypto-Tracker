import { SPECIFIC_CRYPTO_NEWS } from "../constants/api";

export const fetchNews = async (query, numberItemsDisplayed, page) => {
    const response = await fetch(SPECIFIC_CRYPTO_NEWS(query, numberItemsDisplayed, page));
    const markets = await response.json();

    return markets;
}