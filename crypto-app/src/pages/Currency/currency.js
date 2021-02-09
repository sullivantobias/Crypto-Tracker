import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { fetchCurrencyDetails } from '../../api/api';
import Basic from '../../components/details/basic';

const Details = () => {
    let data = useLocation();

    const [currencyDetails, setCurrencyDetails] = useState({})

    useEffect(() => {
        detailsHandler()
    }, []);

    const detailsHandler = async () => {
        const details = await fetchCurrencyDetails(data.state.currency);
        setCurrencyDetails(details);
    }

    return (
        <div>
            { Object.keys(currencyDetails).length && <Basic details={currencyDetails} />}
        </div>
    );
}

export default Details;