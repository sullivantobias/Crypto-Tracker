import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import { fetchCurrencyDetails, fetchCurrencyMarketChart } from '../../api/api';
import { Loader } from '../../components/commons/loader/loader';
import Basic from '../../components/details/basic';
import Chart from '../../components/details/chart/chart';

const Details = () => {
    const { currency } = useSelector(state => state.currency)
    let data = useLocation();

    const [mounted, setMounted] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState({})
    const [currencyMarketChart, setCurrencyMarketChart] = useState([])
    const [updating, setUpdating] = useState(true)

    useEffect(() => {
        if (!mounted) { detailsHandler(); setMounted(true) }
        marketChartHandler()
    }, [currency]);

    const detailsHandler = async () => {
        const details = await fetchCurrencyDetails(data.state.cryptoCurrency);
        setCurrencyDetails(details);
    }

    const marketChartHandler = async () => {
        setUpdating(true)
        const mcData = await fetchCurrencyMarketChart(data.state.cryptoCurrency, currency);
        setCurrencyMarketChart(mcData);
        setUpdating(false)
    }

    return (
        <>
            { Object.keys(currencyDetails).length ? <Basic currency={currency} details={currencyDetails} /> : <Loader />}
            { !updating && Object.keys(currencyMarketChart).length ? <Chart data={currencyMarketChart} /> : <Loader />}
        </>
    );
}

export default Details;