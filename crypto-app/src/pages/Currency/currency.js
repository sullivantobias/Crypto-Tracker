import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { fetchCurrencyDetails, fetchCurrencyMarketChart } from '../../api/api';
import Basic from '../../components/details/basic';
import Chart from '../../components/details/chart/chart';

const Details = () => {
    let data = useLocation();

    const [currencyDetails, setCurrencyDetails] = useState({})
    const [currencyMarketChart, setCurrencyMarketChart] = useState([])

    useEffect(() => {
        detailsHandler()
        marketChartHandler()
    }, []);

    const detailsHandler = async () => {
        const details = await fetchCurrencyDetails(data.state.currency);
        setCurrencyDetails(details);
    }

    const marketChartHandler = async () => {
        const mcData = await fetchCurrencyMarketChart(data.state.currency);
        setCurrencyMarketChart(mcData);
    }

    return (
        <div>
            { Object.keys(currencyDetails).length && <Basic details={currencyDetails} />}
            { Object.keys(currencyMarketChart).length && <Chart data={currencyMarketChart} />}
        </div>
    );
}

export default Details;