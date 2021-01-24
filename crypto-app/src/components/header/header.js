import React from 'react';

import './header.scss';

const Header = ({ datas }) => {
    return (
        <header className='cmp-header'>
            <ul className='cmp-header__list'>
                {Object.keys(datas).map(key => <li className='cmp-header__list__item' key={key}>{key}: <span className='cmp-header__list__item--value'>{datas[key]}</span></li>)}
            </ul>
        </header>
    );
}

export default Header;