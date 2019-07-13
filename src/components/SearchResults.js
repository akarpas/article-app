import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTitle } from '../utils/format';

import style from './SearchResults.scss';

import { data } from '../data/articles.json';

const SearchResults = props => {
    const { searchTerm, updateSearchInput } = props;
    const [filteredArticles, setFilteredArticles] = useState([]);

    const filterArticles = dataToFilter => {
        return [...dataToFilter]
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
    };

    useLayoutEffect(() => {
        const filtered = filterArticles(data);
        setFilteredArticles(filtered);
    }, [searchTerm]);

    return (
        <div className={style.resultsContainer}>
            <div className={style.results}>
                {filteredArticles.map((article, index) => (
                    <Link
                        onClick={updateSearchInput}
                        to={`/article/${article.index}`}
                        key={article + index}
                    >
                        {formatTitle(article.title)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;

SearchResults.propTypes = {
    searchTerm: PropTypes.string,
    updateSearchInput: PropTypes.func
};
