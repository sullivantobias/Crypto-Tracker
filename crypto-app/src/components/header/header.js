import React from 'react';
import { propTypes } from './propTypes'
import { Loader } from '../commons/loader/loader'
import CurrencySelector from '../currencySelector/currencySelector';
import Navigation from '../navigation/navigation';

import './header.scss';

const Header = ({ datas, currencies }) => {
    return (
        <header className='cmp-header'>
            { Object.keys(datas).length ? <ul className='cmp-header__list'>
                {Object.keys(datas).map(key => <li className='cmp-header__list__item' key={key}>{key}: <span className='cmp-header__list__item--value'>{datas[key]}</span></li>)}
            </ul> : <Loader isDots />}
            { currencies.length ? <CurrencySelector currencies={currencies} /> : <Loader isDots />}
        </header>
    );
}

Header.propTypes = propTypes;

export default Header;