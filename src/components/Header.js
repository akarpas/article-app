import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const { articleTitle } = props;
    return (
        <div>
            <h1>Articles</h1>
            <h3>{articleTitle}</h3>
        </div>
    )
};

export default Header;

Header.propTypes = {
    articleTitle: PropTypes.string
};
