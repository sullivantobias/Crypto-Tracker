import React from 'react';

import './basic.scss';

const Basic = ({ details }) => {

    const getUrlParsed = url => {
        const hN = new URL(url).hostname;
        return <a target='_blank' href={url}>{hN}</a>
    }

    return (
        <div className='cmp-details-basic'>
            <div className='cmp-details-basic__marker'>
                <img className='cmp-details-basic__marker--logo' src={details.image.small} alt={details.name} />
                <div className='cmp-details-basic__marker__badges'>
                    <div className='cmp-details-basic__marker__badges--rank'><span>Rank #{details.market_cap_rank}</span></div>
                    <div className='cmp-details-basic__marker__badges--links'>{details.links.homepage.map(item => item && <span cmp-details-basic__marker__badges--links--link>{getUrlParsed(item)}</span>)}</div>
                    <div className='cmp-details-basic__marker__badges--tags'>{details.categories.map(item => <span cmp-details-basic__marker__badges--tags--tag>{item}</span>)}</div>
                </div>
            </div>
        </div>
    );
}

export default Basic;