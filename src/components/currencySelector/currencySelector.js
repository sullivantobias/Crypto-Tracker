import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../store/actions'
import { Loader } from '../commons/loader/loader';

import './currencySelector.scss';


const CurrencySelector = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('usd')

    const { currencies, currency } = useSelector(state => state.currency)
    const dispatch = useDispatch()

    useEffect(() => {
        setSelectedCurrency(currency)
    }, [currency]);

    const onChangeHandler = selectedValue => {
        setSelectedCurrency(selectedValue.value)
        dispatch(allActions.currencyActions.changeCurrency(selectedValue.value))
    }

    const options = currencies && currencies.map(currency => ({ value: currency, label: currency }));

    const customStyles = {
        control: provided => ({
            ...provided,
            minHeight: 27,
            height: 27,
            width: 80,
        }),

        option: provided => ({
            ...provided,
            color: '#0A0F18'
        }),

        valueContainer: provided => ({
            ...provided,
            height: 27,
            padding: '0 4px'
        }),

        indicatorsContainer: provided => ({
            ...provided,
            height: 27,
        }),
    };

    return (
        <div className='cmp-currencySelector'>
            { currencies && currencies.length ?
                <Select
                    placeholder={selectedCurrency}
                    styles={customStyles}
                    options={options}
                    value={selectedCurrency}
                    onChange={onChangeHandler}
                />
                : <Loader isDots />
            }
        </div>
    );
}

export default CurrencySelector;