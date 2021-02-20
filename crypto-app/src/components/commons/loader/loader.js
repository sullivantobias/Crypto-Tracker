import React from 'react';

import './loader.scss';

export const Loader = ({ isDots }) =>
    <div className={`cmp-loader ${isDots && 'isDots'}`}>
        {!isDots && <div className="cmp-loader__wrapper">
            <div className="cmp-loader__wrapper--item"></div>
            <div className="cmp-loader__wrapper--item"></div>
        </div>}

        {isDots && <div class="loading-dots">
            <div class="loading-dots--dot"></div>
            <div class="loading-dots--dot"></div>
            <div class="loading-dots--dot"></div>
        </div>}
    </div>  
