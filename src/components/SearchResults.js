import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ARTICLES from '../data/articles.json';
import style from './SearchResults.scss';

const SearchResults = props => {
    const { searchTerm } = props;
    const { data } = ARTICLES;
    const [filteredArticles, setFilteredArticles] = useState([]);

    useLayoutEffect(() => {
        const filtered = [...data]
            .map((article, index) => {
                return {
                    ...article,
                    index
                };
            })
            .filter(article => {
                return (
                    article &&
                    (article.body.toLowerCase().includes(searchTerm) ||
                        article.title.toLowerCase().includes(searchTerm) ||
                        (article.authors &&
                            article.authors
                                .toString()
                                .toLowerCase()
                                .includes(searchTerm)))
                );
            });
        setFilteredArticles(filtered);
    }, [searchTerm]);

    return (
        <div className={style.resultsContainer}>
            {filteredArticles.map((article, index) => (
                <div key={article + index}>{article.title}</div>
            ))}
        </div>
    );
};

export default SearchResults;

SearchResults.propTypes = {
    searchTerm: PropTypes.string
};
