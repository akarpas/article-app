import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import helpers from '../../utils/helpers';

import style from './index.scss';

import { data } from '../../data/articles.json';

const { formatTitle, filterArticles } = helpers;

const SearchResults = props => {
    const { searchTerm, updateSearchInput } = props;
    const [filteredArticles, setFilteredArticles] = useState([]);

    /* On update of search term update results */
    useLayoutEffect(() => {
        const filtered = filterArticles(data, searchTerm);
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
