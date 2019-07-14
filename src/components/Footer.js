import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Footer.scss';

const Footer = props => {
    const { numberOfArticles, currentArticleIndex, hasArticle } = props;
    const [navigationStatus, setNavigationStatus] = useState({
        showPrevious: false,
        showNext: true
    });
    const lastIndex = numberOfArticles - 1;

    useEffect(() => {
        const isFirstPage = currentArticleIndex === 0;
        const isLastPage = numberOfArticles === currentArticleIndex + 1;
        setNavigationStatus({
            showPrevious: !isFirstPage,
            showNext: !isLastPage
        });
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
                        {navigationStatus.showPrevious && (
                            <Link to={`/article/${previousPage}`}>
                                Previous
                            </Link>
                        )}
                    </div>
                    <div className={style.next}>
                        {navigationStatus.showNext && (
                            <Link to={`/article/${nextPage}`}>Next</Link>
                        )}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default Footer;

Footer.propTypes = {
    numberOfArticles: PropTypes.number,
    currentArticleIndex: PropTypes.number,
    hasArticle: PropTypes.bool
};
