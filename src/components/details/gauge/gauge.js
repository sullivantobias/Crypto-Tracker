import React from 'react';
import { propTypes } from './propTypes';

import './gauge.scss'

const Gauge = ({ filled, total }) => {

    const getSegmentWidth = (filled, total) => {
        const percent = (filled / total) * 100;
        const str = `${percent}%`;
        return { width: str };
    }
    return (
        <div className="meter-wrapper">
            <span className="bar single" style={getSegmentWidth(filled, total)} />
        </div>
    );
};

Gauge.propTypes = propTypes;

export default Gauge;