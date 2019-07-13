import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

import style from './Search.scss';

const Search = props => {
    const { handleInputChange, searchTerm, isSearch } = props;

    return (
        <div className={style.searchWrapper}>
            <input value={searchTerm} onChange={handleInputChange} />
            {isSearch && <SearchResults searchTerm={searchTerm.toLowerCase()} />}
        </div>
    );
};

export default Search;

Search.propTypes = {
    handleInputChange: PropTypes.func,
    searchTerm: PropTypes.string,
    isSearch: PropTypes.bool
};
