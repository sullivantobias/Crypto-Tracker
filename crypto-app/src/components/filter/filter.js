import React, { useRef } from 'react';

import './filter.scss'

const Filter = ({ filters, onChangeValues }) => {
    const element = useRef()
    const onClickHandler = evt => {
        const { currentTarget } = evt;
        const { time } = currentTarget.dataset;
        const allOptions = element.current.querySelectorAll('li')

        allOptions.forEach(option => option.classList.remove('selected'))

        currentTarget.classList.add('selected');

        onChangeValues(time)
    };

    return (
        <div ref={element} className='cmp-filter'>
            <ul className='cmp-filter__choices'>
                {filters.map((filter, index) => <li data-time={filter.value} className={index === Object.keys(filters).length - 1 ? 'selected' : ''} onClick={onClickHandler} key={index}>{filter.label}</li>)}
            </ul>
        </div>
    );
}

export default Filter;