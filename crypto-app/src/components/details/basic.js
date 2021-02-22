import React from 'react';
import { IoIosLink, IoIosPricetag } from 'react-icons/io';
import Gauge from './gauge/gauge';
import { formatNumbers } from '../utils';

import './basic.scss';

const Basic = ({ details, currency }) => {
    const getUrlParsed = url => {
        const hN = new URL(url).hostname;
        return <a target='_blank' href={url}><IoIosLink />{hN}</a>
    }

    const isGoingDown = price => {
        if (price === 0) return
        return price < 0 ? 'isDown' : 'isUp';
    }

    return (
        <div className='cmp-details-basic'>
            <div className='cmp-details-basic__marker'>
                <img className='cmp-details-basic__marker--logo' src={details.image.small} alt={details.name} />
                <div className='cmp-details-basic__marker__badges'>
                    <div className='cmp-details-basic__marker__badges--rank'><span>Rank #{details.market_cap_rank}</span></div>
                    <div className='cmp-details-basic__marker__badges--links'>{details.links.homepage.map((item, index) => item && <span key={index} className='cmp-details-basic__marker__badges--links--link'>{getUrlParsed(item)}</span>)}</div>
                    <div className='cmp-details-basic__marker__badges--tags'>{details.categories.map((item, index) => <span key={index} className='cmp-details-basic__marker__badges--tags--tag'><IoIosPricetag />{item}</span>)}</div>
                </div>
            </div>
            <div className='cmp-details-basic__prices'>
                <h4 className='cmp-details-basic__prices--title'>{details.name} Price <span>({details.symbol})</span></h4>
                <div className='cmp-details-basic__prices--price'> {formatNumbers(currency, details.market_data.current_price[currency])} </div>
                <div className={`cmp-details-basic__prices--change ${isGoingDown(details.market_data.price_change_percentage_24h)}`} > {details.market_data.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='cmp-details-basic__prices__low-high'>
                    <span className='cmp-details-basic__prices__low-high--low'>Low: <span className='value'>{formatNumbers(currency, details.market_data.low_24h[currency])}</span></span>
                    <span className='cmp-details-basic__prices__low-high--high'>High: <span className='value'>{formatNumbers(currency, details.market_data.high_24h[currency])}</span></span>
                    <span className='cmp-details-basic__prices__low-high__gauge'>
                        <Gauge filled={details.market_data.current_price[currency]} total={details.market_data.high_24h[currency]} />
                    </span>
                </div>
            </div>
        </div >
    );
}

export default Basic;