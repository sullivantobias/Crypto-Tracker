import React from 'react';
import CurrencySelector from '../currencySelector/currencySelector';

import './header.scss';

const Header = ({ datas, currencies }) => {
    return (
        <header className='cmp-header'>
            <ul className='cmp-header__list'>
                {Object.keys(datas).map(key => <li className='cmp-header__list__item' key={key}>{key}: <span className='cmp-header__list__item--value'>{datas[key]}</span></li>)}
            </ul>
            <CurrencySelector currencies={currencies} />
        </header>
    );
}

export default Header;