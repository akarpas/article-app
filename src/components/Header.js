import React from 'react';
import PropTypes from 'prop-types';
import { formatTitle } from '../utils/format';

const Header = props => {
    const { articleTitle } = props;
    return (
        <div>
            <h1>Articles</h1>
            <h3>{formatTitle(articleTitle)}</h3>
        </div>
    );
};

export default Header;

Header.propTypes = {
    articleTitle: PropTypes.string
};
