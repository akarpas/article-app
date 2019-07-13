import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Footer.scss';

const Footer = props => {
    const { numberOfArticles, currentArticleIndex } = props;
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        if (
            currentArticleIndex !== 0 &&
            currentArticleIndex - 1 < numberOfArticles
        ) {
            setHasNext(true);
            setHasPrevious(true);
        }
        if (numberOfArticles === currentArticleIndex + 1) {
            setHasNext(false);
            setHasPrevious(true);
        }
        if (currentArticleIndex === 0) {
            setHasNext(true);
            setHasPrevious(false);
        }
    }, [currentArticleIndex]);

    return (
        <div className={style.footerContainer}>
            <div className={style.previous}>
                {hasPrevious && (
                    <Link to={`/article/${currentArticleIndex - 1}`}>Previous</Link>
                )}
            </div>
            <div className={style.next}>
                {hasNext && (
                    <Link to={`/article/${currentArticleIndex + 1}`}>Next</Link>
                )}
            </div>
        </div>
    );
};

export default withRouter(Footer);

Footer.propTypes = {
    numberOfArticles: PropTypes.number,
    currentArticleIndex: PropTypes.number
};
