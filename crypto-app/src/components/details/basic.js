import React from 'react';

import './basic.scss';

const Basic = ({ details }) => {

    const getUrlParsed = url => {
        const hN = new URL(url).hostname;
        return <a target='_blank' href={url}>{hN}</a>
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
                    <div className='cmp-details-basic__marker__badges--tags'>{details.categories.map((item, index) => <span key={index} className='cmp-details-basic__marker__badges--tags--tag'>{item}</span>)}</div>
                </div>
            </div>
            <div className='cmp-details-basic__prices'>
                <h4 className='cmp-details-basic__prices--title'>{details.name} Price <span>({details.symbol})</span></h4>
                <div className='cmp-details-basic__prices--price'> {details.market_data.current_price.usd} </div>
                <div className={`cmp-details-basic__prices--change ${isGoingDown(details.market_data.price_change_percentage_24h)}`} > {details.market_data.price_change_percentage_24h.toFixed(2)}%</div>
            </div>
        </div >
    );
}

export default Basic;