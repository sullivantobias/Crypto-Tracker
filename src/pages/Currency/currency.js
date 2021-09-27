import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { fetchCurrencyDetails, fetchCurrencyMarketChart } from '../../api/api';
import { Loader } from '../../components/commons/loader/loader';
import Basic from '../../components/details/basic';
import Chart from '../../components/details/chart/chart';
import Filter from '../../components/filter/filter';
import Description from '../../components/details/description/description';
import News from '../../components/news/news';
import Converter from '../../components/converter/converter';

import './currency.scss';
const Details = () => {
    const { currency } = useSelector(state => state.currency)
    let { cryptoID } = useParams();
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
        const details = await fetchCurrencyDetails(cryptoID);

        setCurrencyDetails(details);
    }

    const marketChartHandler = async () => {
        setUpdating(true)

        const mcData = await fetchCurrencyMarketChart(cryptoID, currency, time);
        setCurrencyMarketChart(mcData);
        setUpdating(false)
    }

    return (
        <div className='cmp-page-currency'>
            {Object.keys(currencyDetails).length ?
                <Basic currency={currency} details={currencyDetails} />
                : <Loader />}
            {timesFilter}
            {!updating && Object.keys(currencyMarketChart).length ?
                <Chart time={time} data={currencyMarketChart} />
                : <Loader />}
            {Object.keys(currencyDetails).length ? <Converter
                crypto={{ name: currencyDetails.name, symbol: currencyDetails.symbol }}
                lastValue={currencyDetails.market_data.current_price[currency]}
                currency={currency}
            /> : <Loader />}
            {Object.keys(currencyDetails).length ?
                <Description crypto={currencyDetails.name} text={currencyDetails.description &&
                    currencyDetails.description.en} />
                : <Loader />}
            {Object.keys(currencyDetails).length ?
                <News query={currencyDetails.name} numberItemsDisplayed={3} /> :
                <Loader />}
        </div >
    );
}

export default Details;