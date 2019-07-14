import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import NoMatch from './NoMatch';

import style from './Article.scss';

const ENVIRONMENT = process.env.NODE_ENV;
const IMG_BASE_URL = '<img src="https://cdn2.audiencemedia.com';

const Article = props => {
    const [body, setBody] = useState('<div></div>');
    const {
        match,
        article
    } = props;
    const { params } = match;

    const parseBody = bodyContent =>
        bodyContent.replace(new RegExp('<img src="', 'g'), IMG_BASE_URL);

    useEffect(() => {
        if (ENVIRONMENT !== 'test') window.scrollTo(0, 0);
        if (article) {
            setBody(parseBody(article.body));
        }
    }, [params]);

    const content = article ? (
        <div className={style.articleContainer}>
            <h3>
                <span>Authors: </span>
                {article.authors ? (
                    article.authors.map((author, i) => (
                        <span key={author + i}>{author}</span>
                    ))
                ) : (
                    <span>n/a</span>
                )}
            </h3>
            <div className={style.articleBody}>{ReactHtmlParser(body)}</div>
        </div>
    ) : (
        <NoMatch />
    );

    return content;
};

export default withRouter(Article);

Article.propTypes = {
    article: PropTypes.object,
    match: PropTypes.object
};
