import React, { useRef, useState } from 'react';

import './currencySelector.scss';

const CurrencySelector = ({ currencies }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('usd')
    const select = useRef();

    const onChangeHandler = () => {
        setSelectedCurrency(select.current.value)
    }

    return (
        <div className='cmp-currencySelector'>
            <select value={selectedCurrency} ref={select} onChange={onChangeHandler}>
                {currencies.map(currency => <option value={currency}>{currency}</option>)}
            </select>
        </div>
    );
}

export default CurrencySelector;