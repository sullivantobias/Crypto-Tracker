import React from 'react';
import Listing from '../../components/listing/listing';

const Home = props => {
    return (
        <div>
            <Listing {...props} />
        </div>
    );
}

export default Home;