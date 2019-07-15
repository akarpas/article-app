import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTitle } from '../../utils/format';

import style from './index.scss';

import { data } from '../../data/articles.json';

const SearchResults = props => {
    const { searchTerm, updateSearchInput } = props;
    const [filteredArticles, setFilteredArticles] = useState([]);

    /* Function to filter the results according to the keyword
    from the input by checking title, authors and body. the "map"
    part of the chain is to add the correct index for linking
    to the article */
    const filterArticles = dataToFilter => {
        return [...dataToFilter]
            .map((article, index) => ({ ...article, index }))
            .filter(
                article =>
                    article &&
                    (article.body.toLowerCase().includes(searchTerm) ||
                        article.title.toLowerCase().includes(searchTerm) ||
                        (article.authors &&
                            article.authors
                                .toString()
                                .toLowerCase()
                                .includes(searchTerm)))
            );
    };

    /* On update of search term update results */
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
