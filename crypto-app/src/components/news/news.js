
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../api/news';

import './news.scss';


const News = ({ crypto }) => {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        const news = await fetchNews(crypto);

        setNews(news);
    }

    return (
        <div className='cmp-news'>
            <h2 className='cmp-news--title'>{crypto} News</h2>
            <div className='cmp-news__content'>
                {news.articles && news.articles.length && news.articles.map(({ title, urlToImage, description, author, url }) =>
                    <a className='cmp-news__content__wrapper' href={url} target='_blank'>
                        <div className='cmp-news__content__wrapper__image'>
                            <img src={urlToImage} />
                        </div>
                        <div className='cmp-news__content__wrapper__right'>
                            <h4 className='cmp-news__content__wrapper__right--title'>{title}</h4>
                            <p className='cmp-news__content__wrapper__right--desc'>{description}</p>
                            <div className='cmp-news__content__wrapper__right--author'>{author}</div>
                        </div>
                    </a>)}
            </div>
        </div>
    );
}

export default News;