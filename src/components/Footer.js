import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Footer.scss';

const Footer = props => {
    const { numberOfArticles, currentArticleIndex, hasArticle } = props;
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const lastIndex = numberOfArticles - 1;

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

    const previousPage =
        currentArticleIndex === 0 ? 0 : currentArticleIndex - 1;
    const nextPage =
        numberOfArticles === lastIndex ? lastIndex : currentArticleIndex + 1;

    return (
        <div className={style.footerContainer}>
            {hasArticle && (
                <React.Fragment>
                    <div className={style.previous}>
                        {hasPrevious && (
                            <Link to={`/article/${previousPage}`}>
                                Previous
                            </Link>
                        )}
                    </div>
                    <div className={style.next}>
                        {hasNext && (
                            <Link to={`/article/${nextPage}`}>Next</Link>
                        )}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default withRouter(Footer);

Footer.propTypes = {
    numberOfArticles: PropTypes.number,
    currentArticleIndex: PropTypes.number,
    hasArticle: PropTypes.bool
};
