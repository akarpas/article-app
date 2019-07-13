import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = props => {
    const { numberOfArticles, currentArticleIndex } = props;
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        if (currentArticleIndex !== 0 && currentArticleIndex - 1 < numberOfArticles) {
            setHasNext(true);
            setHasPrevious(true);
        }
        if (numberOfArticles === currentArticleIndex - 1) {
            setHasNext(false);
            setHasPrevious(true);
        }
        if (currentArticleIndex === 0) {
            setHasNext(true);
            setHasPrevious(false);
        }
    }, [currentArticleIndex]);

    return (
        <div>
            <h3>Footer</h3>
            {hasPrevious && <Link to={`/article/${currentArticleIndex - 1}`}>Prev</Link>}
            {hasNext && <Link to={`/article/${currentArticleIndex + 1}`}>Next</Link>}
        </div>
    );
};

export default withRouter(Footer);

Footer.propTypes = {
    numberOfArticles: PropTypes.number,
    currentArticleIndex: PropTypes.number
};
