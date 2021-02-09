import React from 'react';

import './basic.scss';

const Basic = ({ details }) => {
    return (
        <div className='cmp-details-basic'>
            <div className='cmp-details-basic__marker'>
                <img className='cmp-details-basic__marker--logo' src={details.image.small} alt={details.name} />
                <div className='cmp-details-basic__marker__badges'>
                    <span className='cmp-details-basic__marker__badges--rank'>Rank #{details.market_cap_rank}</span>
                    <span className='cmp-details-basic__marker__badges--tags'>{details.categories.map(item => item)}</span>
                </div>
            </div>
        </div>
    );
}

export default Basic;