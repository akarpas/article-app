import React, { useState } from 'react';
import SearchResults from './SearchResults';

import style from './Search.scss';

const PLACEHOLDER_TEXT = 'Search Articles';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    /* Handle input change and check if isSearch is to be
    activated or not in order to display the results */
    const handleInputChange = event => {
        const { target } = event;
        const { value } = target;
        setSearchTerm(value);
        setIsSearch(value !== '');
    };

    /* Function to reset the input and results when user
    selects a link from the results */
    const updateSearchInput = () => {
        setSearchTerm('');
        setIsSearch(false);
    };

    return (
        <div className={style.searchWrapper}>
            <div className={style.search}>
                <input
                    placeholder={PLACEHOLDER_TEXT}
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                {isSearch && (
                    <SearchResults
                        updateSearchInput={updateSearchInput}
                        searchTerm={searchTerm.toLowerCase()}
                    />
                )}
            </div>
        </div>
    );
};

export default Search;
