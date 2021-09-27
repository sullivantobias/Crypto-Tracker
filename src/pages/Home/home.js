import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchMarkets } from '../../api/api'
import { Loader } from '../../components/commons/loader/loader';
import Listing from '../../components/listing/listing';

import './home.scss';

const Home = () => {
    const [listingInfos, setListingInfos] = useState([]);
    const [loadingList, setLoadingList] = useState(false);
    const [page, setPage] = useState(1);
    const [firstLoad, setFirstLoad] = useState(true);
    const [loadMore, setLoadMore] = useState(false);

    const currencyData = useSelector(state => state.currency)

    useEffect(() => {
        listinghandler()
    }, [currencyData.currency, page]);

    const listinghandler = async () => {
        firstLoad && setLoadingList(false)

        const listingMarkets = await fetchMarkets(currencyData.currency, page);

        firstLoad && setLoadingList(true)
        loadMore ? setListingInfos([...listingInfos, listingMarkets].flat())
            : setListingInfos(listingMarkets)

        setFirstLoad(false)
        setLoadMore(false)
    }

    const handleClick = () => {
        setPage(prev => prev + 1);
        setLoadMore(true)
    }

    return (
        <div className='cmp-page-home'>
            <h2 className='cmp-page-honme--title'>Currencies by capitalisation</h2>
            <Listing loadingList={loadingList}
                keys={['Name', 'Price', '24h', 'Market Cap', 'Volume', 'Circulating Supply', 'Last 7 Days']}
                datas={listingInfos}
                currency={currencyData.currency} />
            {!loadMore && loadingList && <button onClick={() => handleClick()}
                className='cmp-page-home--loadmore'>Load more</button>}
            {loadMore && !firstLoad && <Loader isDots />}
        </div>
    );
}

export default Home;