import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../api/news';
import { Loader } from '../commons/loader/loader';

import './news.scss';

const News = ({ query, numberItemsDisplayed, hideTitle = false }) => {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        getNews()
    }, [page])

    const getNews = async () => {
        setLoading(true);

        const newsFetched = await fetchNews(query, numberItemsDisplayed, page);
        newsFetched.status !== 'error' && setNews([...news, newsFetched.articles].flat());
        newsFetched.status === 'error' && setError(newsFetched.message)

        setLoading(false);
    }

    return (
        <div className='cmp-news'>
            { !hideTitle && <h2 className='cmp-news--title'>{query} News</h2>}
            { !error ? <>
                <div className='cmp-news__content'>
                    {news && news.length && news.map(({ title, urlToImage, description, author, url }, index) =>
                        <a rel="noreferrer" key={index} className='cmp-news__content__wrapper' href={url} target='_blank'>
                            <div className='cmp-news__content__wrapper__image'>
                                <img src={urlToImage} alt={title} />
                            </div>
                            <div className='cmp-news__content__wrapper__right'>
                                <h4 className='cmp-news__content__wrapper__right--title'>{title}</h4>
                                <p className='cmp-news__content__wrapper__right--desc'>{description}</p>
                                <div className='cmp-news__content__wrapper__right--author'>{author}</div>
                            </div>
                        </a>
                    )}
                </div>
                { !loading ?
                    <button onClick={() => setPage(prev => prev + 1)}
                        className='cmp-news--loadmore'>Load more</button>
                    : <Loader isDots />
                }
            </>
                : <p className='cmp-news--error'>{error}</p>}
        </div>
    );
}

export default News;