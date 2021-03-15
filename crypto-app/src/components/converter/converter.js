import React, { useState } from 'react';
import { propTypes } from './propTypes';

import './converter.scss';

const Converter = ({ crypto, lastValue, currency }) => {
    const [fiatValue, setFiatValue] = useState(0)
    const [cryptoValue, setCryptoValue] = useState(0)

    const cryptoHandler = inputValue => {
        console.log(inputValue)
        !isNaN(inputValue) && setCryptoValue(inputValue);
        !isNaN(inputValue) && setFiatValue(lastValue * inputValue);
    }

    const fiatHandler = inputValue => {
        !isNaN(inputValue) && setFiatValue(inputValue);
        !isNaN(inputValue) && setCryptoValue(inputValue / lastValue);
    }

    const resetValues = () => {
        setCryptoValue(0);
        setFiatValue(0);
    }

    return (
        <div className='cmp-converter'>
            <div className='cmp-converter__currency'>
                <div className='cmp-converter__currency__wrapper' >
                    <p className='cmp-converter__currency__wrapper--symbol'>{crypto.symbol}</p>
                    <p className='cmp-converter__currency__wrapper--label'>{crypto.name}</p>
                </div>
                <div className='cmp-converter__currency__input'>
                    <input onFocus={() => resetValues()} value={cryptoValue} name='crypto' onChange={evt => cryptoHandler(evt.currentTarget.value)} type='text'></input>
                </div>
            </div>
            <div className='cmp-converter__currency'>
                <div className='cmp-converter__currency__wrapper' >
                    <p className='cmp-converter__currency__wrapper--symbol'>{currency}</p>
                </div>
                <div className='cmp-converter__currency__input'>
                    <input onFocus={() => resetValues()} name='fiat' value={fiatValue} onChange={evt => fiatHandler(evt.currentTarget.value)} type='text'></input>
                </div>
            </div>
        </div >
    );
}

Converter.propTypes = propTypes;

export default Converter;