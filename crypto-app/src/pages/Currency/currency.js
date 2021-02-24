import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import { fetchCurrencyDetails, fetchCurrencyMarketChart } from '../../api/api';
import { Loader } from '../../components/commons/loader/loader';
import Basic from '../../components/details/basic';
import Chart from '../../components/details/chart/chart';
import Filter from '../../components/filter/filter';

import './currency.scss';

const Details = () => {
    const { currency } = useSelector(state => state.currency)
    let data = useLocation();

    const [mounted, setMounted] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState({})
    const [currencyMarketChart, setCurrencyMarketChart] = useState([])
    const [updating, setUpdating] = useState(true)
    const [time, setTime] = useState('1')

    const timesFilter = useMemo(() =>
        <Filter onChangeValues={value => setTime(value)}
            filters={[{ label: 'Day', value: 1 },
            { label: 'Week', value: 7 },
            { label: 'Month', value: 30 },
            { label: 'Year', value: 365 },
            { label: 'All', value: 'max' }]} />, []);

    useEffect(() => {
        if (!mounted) { detailsHandler(); setMounted(true) }
        marketChartHandler()
    }, [currency, time]);

    const detailsHandler = async () => {
        const details = await fetchCurrencyDetails(data.state.cryptoCurrency);
        setCurrencyDetails(details);
    }

    const marketChartHandler = async () => {
        setUpdating(true)
        const mcData = await fetchCurrencyMarketChart(data.state.cryptoCurrency, currency, time);
        setCurrencyMarketChart(mcData);
        setUpdating(false)
    }

    return (
        <div className='cmp-page-currency'>
            { Object.keys(currencyDetails).length ? <Basic currency={currency} details={currencyDetails} /> : <Loader />}
            {timesFilter}
            { !updating && Object.keys(currencyMarketChart).length ? <Chart time={time} data={currencyMarketChart} /> : <Loader />}
        </div>
    );
}

export default Details;