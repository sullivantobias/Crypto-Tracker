import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchMarkets } from '../../api/api'
import Listing from '../../components/listing/listing';

const Home = () => {
    const [listingInfos, setListingInfos] = useState([]);
    const [loadingList, setLoadingList] = useState(false);

    const currencyData = useSelector(state => state.currency)

    useEffect(() => {
        listinghandler()
    }, [currencyData]);

    const listinghandler = async () => {
        setLoadingList(false)

        const listingMarkets = await fetchMarkets(currencyData.currency);

        setLoadingList(true)
        setListingInfos(listingMarkets);
    }

    return (
        <div>
            <Listing loadingList={loadingList} keys={['Name', 'Price', '24h', 'Market Cap', 'Volume', 'Circulating Supply', 'Last 7 Days']} datas={listingInfos} currency={currencyData.currency} />
        </div>
    );
}

export default Home;