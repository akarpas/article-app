import React from 'react';
import PropTypes from 'prop-types';
import { formatTitle } from '../utils/format';

import style from './Header.scss';

const Header = props => {
    const { articleTitle } = props;
    return (
        <header className={style.headerContainer}>
            <h1>The Articles Magazine</h1>
            <h3>{formatTitle(articleTitle)}</h3>
        </header>
    );
};

export default Header;

Header.propTypes = {
    articleTitle: PropTypes.string
};
