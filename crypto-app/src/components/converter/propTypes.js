import PropTypes from 'prop-types';

export const propTypes = {
    crypto: PropTypes.shape({
        label: PropTypes.string,
        symbol: PropTypes.string
    }),
    lastValue: PropTypes.number,
    currency: PropTypes.string,
};