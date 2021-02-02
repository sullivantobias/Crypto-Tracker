import React from 'react';
import { propTypes } from './propTypes'

import './listing.scss';

const Listing = ({ keys, datas, currency }) => {
    const isGoingDown = price => {
        if (price === 0) return
        return price < 0 ? 'isDown' : 'isUp';
    }

    const formatNumbers = (number, fixed = 2, isSymbol = true) => {
        const formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number.toFixed(fixed))
        const formattedNumberNoSymbol = new Intl.NumberFormat({ style: 'currency', currency }).format(number.toFixed(fixed))

        return isSymbol ? formattedNumber : formattedNumberNoSymbol;
    }

    return (
        <div className='cmp-listing'>
            <table className='cmp-listing__list'>
                <thead className='cmp-listing__keys'>
                    <tr>
                        {keys.map(key => <th className='cmp-listing__keys--key' key={key}><div>{key}</div></th>)}
                    </tr>
                </thead>
                <tbody className='cmp-listing__values'>
                    {datas.map(item => item &&
                        <tr className='cmp-listing__values__item' key={item.id}>
                            <td className='cmp-listing__values__item__marker'>
                                <img alt={item.name} className='cmp-listing__values__item__marker--logo' src={item.image} />
                                <div className='cmp-listing__values__item__marker__rightWrapper'>
                                    <span className='cmp-listing__values__item__marker__rightWrapper--name'>{item.name}</span>
                                    <span className='cmp-listing__values__item__marker__rightWrapper--index'>{item.market_cap_rank}</span>
                                    <span className='cmp-listing__values__item__marker__rightWrapper--symbol'>{item.symbol}</span>
                                </div>
                            </td>
                            <td className='cmp-listing__values__item--price'>{formatNumbers(item.current_price)}</td>
                            <td className={`cmp-listing__values__item--24hchange ${isGoingDown(item.price_change_percentage_24h)}`}>{item.price_change_percentage_24h.toFixed(2)}%</td>
                            <td className='cmp-listing__values__item--marketcap'>{formatNumbers(item.market_cap)}</td>
                            <td className='cmp-listing__values__item--volume'>{formatNumbers(item.total_volume)}</td>
                            <td className='cmp-listing__values__item--circulatingSupply'>{`${formatNumbers(item.circulating_supply, 0, false)}  ${item.symbol}`}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

Listing.propTypes = propTypes;

export default Listing;