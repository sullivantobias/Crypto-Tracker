import React, { useRef, useState } from 'react';
import { propTypes } from './propTypes'
import { useDispatch } from 'react-redux'
import allActions from '../../store/actions'

import './currencySelector.scss';

const CurrencySelector = ({ currencies }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('usd')
    const select = useRef();

    const dispatch = useDispatch()

    const onChangeHandler = () => {
        setSelectedCurrency(select.current.value)
        dispatch(allActions.currencyActions.changeCurrency(select.current.value))
    }

    return (
        <div className='cmp-currencySelector'>
            <select value={selectedCurrency} ref={select} onChange={onChangeHandler}>
                {currencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)}
            </select>
        </div>
    );
}

CurrencySelector.propTypes = propTypes;

export default CurrencySelector;