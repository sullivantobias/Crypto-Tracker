import React from 'react';
import { Link } from 'react-router-dom';
import { propTypes } from './propTypes'
import { Loader } from '../commons/loader/loader'
import { formatNumbers } from '../utils';

import './listing.scss';

const Listing = ({ keys, datas, currency, loadingList }) => {
    const getImageUrl = url => `https://www.coingecko.com/coins/${url.match(/\d+/)}/sparkline`
    const isGoingDown = price => {
        if (price === 0) return
        return price < 0 ? 'isDown' : 'isUp';
    }

    return (
        <div className='cmp-listing'>
            { loadingList ? <table className='cmp-listing__list'>
                <thead className='cmp-listing__keys'>
                    <tr>
                        {keys.map(key => <th className='cmp-listing__keys--key' key={key}><div>{key}</div></th>)}
                    </tr>
                </thead>
                <tbody className='cmp-listing__values'>
                    {datas.map(item => item &&
                        <tr key={item.id} className='cmp-listing__values__item' >
                            <td className='cmp-listing__values__item__marker'>
                                <Link to={{
                                    pathname: `/currencies/${item.symbol}`,
                                    state: { cryptoCurrency: item.id }
                                }} className='cmp-listing__values__link'>
                                    <img alt={item.name} className='cmp-listing__values__item__marker--logo' src={item.image} />
                                    <div className='cmp-listing__values__item__marker__rightWrapper'>
                                        <span className='cmp-listing__values__item__marker__rightWrapper--name'>{item.name}</span>
                                        <span className='cmp-listing__values__item__marker__rightWrapper--index'>{item.market_cap_rank}</span>
                                        <span className='cmp-listing__values__item__marker__rightWrapper--symbol'>{item.symbol}</span>
                                    </div>
                                </Link>
                            </td>
                            <td className='cmp-listing__values__item--price'>
                                <Link to={{
                                    pathname: `/currencies/${item.symbol}`,
                                    state: { currency: item.id }
                                }} className='cmp-listing__values__link'>
                                    {formatNumbers(currency, item.current_price)}
                                </Link>
                            </td>
                            <td className={`cmp-listing__values__item--24hchange ${isGoingDown(item.price_change_percentage_24h)}`}>{item.price_change_percentage_24h.toFixed(2)}%</td>
                            <td className='cmp-listing__values__item--marketcap'>{formatNumbers(currency, item.market_cap)}</td>
                            <td className='cmp-listing__values__item--volume'>{formatNumbers(currency, item.total_volume)}</td>
                            <td className='cmp-listing__values__item--circulatingSupply'>{`${formatNumbers(currency, item.circulating_supply, 0, false)}  ${item.symbol}`}</td>
                            <td className='cmp-listing__values__item--last7days'>
                                <img alt={item.name} src={getImageUrl(item.image)} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table> : <Loader />
            }
        </div >
    );
}

Listing.propTypes = propTypes;

export default Listing;