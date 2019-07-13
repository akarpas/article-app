import React, { useState } from 'react';
import SearchResults from './SearchResults';

import style from './Search.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const handleInputChange = event => {
        const { target } = event;
        const { value } = target;
        setSearchTerm(value);
        setIsSearch(value !== '');
    };

    const updateSearchInput = () => {
        setSearchTerm('');
        setIsSearch(false);
    };

    return (
        <div className={style.searchWrapper}>
            <div className={style.search}>
                <input
                    placeholder="Search Articles"
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