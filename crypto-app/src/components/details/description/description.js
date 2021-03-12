import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import './description.scss';

const Description = ({ crypto, text }) => {
    const [hidded, setHidded] = useState(true)
    const [isBigger, setIsBigger] = useState(false)

    useEffect(() => {
        getHeightOfDesc()
    }, [])

    const getHeightOfDesc = () => {
        const tempEl = document.createElement('div')

        tempEl.innerText = text;
        document.body.appendChild(tempEl);

        setIsBigger(tempEl.offsetHeight > 150);

        tempEl.remove()
    }

    return (
        <div className={`cmp-details-description ${hidded && isBigger ? 'hidded' : ''}`}>
            <h2 className='cmp-details-description--title'>About {crypto}</h2>
            <p dangerouslySetInnerHTML={{ __html: text }} className='cmp-details-description--text'></p>
            { isBigger && <button onClick={() => setHidded(prev => !prev)} className='cmp-details-description--readmore'>
                <span>{hidded ? 'Read more' : 'Read Less'}</span>
                <FaChevronDown />
            </button>}
        </div>
    );
}

export default Description;