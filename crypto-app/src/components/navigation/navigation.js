import React, { useEffect, useState } from 'react';
import { propTypes } from './propTypes'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CurrencySelector from '../currencySelector/currencySelector';

import './navigation.scss';

const Navigation = ({ isBurger = true, links }) => {
    const currencyData = useSelector(state => state.currency)

    const [open, setOpen] = useState(false);

    const onClickHandler = () => setOpen(prev => !prev);

    useEffect(() => setOpen(false), [currencyData])

    return (
        <nav className='cmp-navigation'>
            {
                isBurger ?
                    <>
                        <div className='cmp-navigation__top'>
                            <span className='cmp-navigation__top--logo'>Crypto Tracker</span>
                            <span className='cmp-navigation__top__burger' onClick={onClickHandler}>
                                <GiHamburgerMenu />
                            </span>

                        </div>
                        <div className={`cmp-navigation__wrapper ${open ? 'open' : ''}`}>
                            <div className='cmp-navigation__wrapper__content'>
                                <div className='cmp-navigation__wrapper__content__header'>
                                    <span className='cmp-navigation__wrapper__content__header--logo'>Crypto Tracker</span>
                                    <CurrencySelector />
                                    <span onClick={onClickHandler} className='cmp-navigation__wrapper__content__header--close'>
                                        <IoIosClose />
                                    </span>

                                </div>
                                <ul className='cmp-navigation__wrapper__content__list'>
                                    {links.map(({ path, title }, index) => <li onClick={onClickHandler} className='cmp-navigation__wrapper__content__list--link' key={index}><Link to={path} >{title}</Link></li>)}
                                </ul>
                            </div>
                        </div> </> :
                    <ul className='cmp-navigation__list'>
                        {links.map(({ path, title }, index) => <li onClick={onClickHandler} className='cmp-navigation__list--link' key={index}><Link to={path} >{title}</Link></li>)}
                    </ul>
            }
        </nav>
    );
}

Navigation.propTypes = propTypes;

export default Navigation;