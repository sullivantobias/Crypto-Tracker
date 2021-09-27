import React from 'react';
import News from '../../components/news/news';

import './news.scss';

const NewsPage = () => {
    return (
        <div className='cmp-page-news'>
            <h2 className='cmp-page-news--title'>Latest News</h2>
            <News query={'cryptocurrencies'} numberItemsDisplayed={10} hideTitle />
        </div>
    );
}

export default NewsPage;