import React from 'react';
import { propTypes } from './propTypes'
import { Loader } from '../commons/loader/loader'
import CurrencySelector from '../currencySelector/currencySelector';

import './header.scss';

const Header = ({ datas }) => {
    return (
        <header className='cmp-header'>
            { Object.keys(datas).length ? <ul className='cmp-header__list'>
                {Object.keys(datas).map(key => <li className='cmp-header__list__item' key={key}>{key}: <span className='cmp-header__list__item--value'>{datas[key]}</span></li>)}
            </ul> : <Loader isDots />}
            <CurrencySelector />
        </header>
    );
}

Header.propTypes = propTypes;

export default Header;