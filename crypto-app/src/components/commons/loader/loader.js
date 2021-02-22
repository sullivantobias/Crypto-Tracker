import React from 'react';

import './loader.scss';

export const Loader = ({ isDots }) =>
    <div className={`cmp-loader ${isDots && 'isDots'}`}>
        {!isDots && <div className="cmp-loader__wrapper">
            <div className="cmp-loader__wrapper--item"></div>
            <div className="cmp-loader__wrapper--item"></div>
        </div>}

        {isDots && <div className="loading-dots">
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
        </div>}
    </div>  
