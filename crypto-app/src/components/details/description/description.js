import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import './description.scss';

const Description = ({ crypto, text }) => {
    const [hidded, setHidded] = useState(true)

    return (
        <div className={`cmp-details-description ${hidded ? 'hidded' : ''}`}>
            <h2 className='cmp-details-description--title'>About {crypto}</h2>
            <p dangerouslySetInnerHTML={{ __html: text }} className='cmp-details-description--text'></p>
            <button onClick={() => setHidded(prev => !prev)} className='cmp-details-description--readmore'>
                <span>{hidded ? 'Read more' : 'Read Less'}</span>
                <FaChevronDown />
            </button>
        </div>
    );
}

export default Description;