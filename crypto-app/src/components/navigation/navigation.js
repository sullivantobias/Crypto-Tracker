import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = ({ links }) => {
    return (
        <nav className='cmp-navigation'>
            <ul>
                {links.map(({ path, title }, index) => <li key={index}><Link to={path} >{title}</Link></li>)}
            </ul>
        </nav>
    );
}


export default Navigation;