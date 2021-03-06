import React from 'react';
import PropTypes from 'prop-types';
import helpers from '../../utils/helpers';

import style from './index.scss';

const { formatTitle } = helpers;

const MAIN_TITLE = 'The Articles Magazine';

const Header = props => {
    const { articleTitle } = props;
    return (
        <header className={style.headerContainer}>
            <h1>{MAIN_TITLE}</h1>
            <h3>{formatTitle(articleTitle)}</h3>
        </header>
    );
};

export default Header;

Header.propTypes = {
    articleTitle: PropTypes.string
};
