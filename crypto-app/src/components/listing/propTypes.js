import PropTypes from 'prop-types';

export const propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string),
    datas: PropTypes.arrayOf(PropTypes.object),
    currency: PropTypes.string,
    loadingList: PropTypes.bool
};