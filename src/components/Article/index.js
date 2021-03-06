import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import NoMatch from '../NoMatch';

import style from './index.scss';

const ENVIRONMENT = process.env.NODE_ENV;
const IMG_BASE_URL = '<img src="https://cdn2.audiencemedia.com';
const IMG_INVALID_TEXT = '<img src="';
const AUTHORS_LABEL = 'Authors: ';

const Article = props => {
    /* Set empty div body to avoid the body parser
    from failing */
    const [body, setBody] = useState('<div></div>');
    const { match, article } = props;
    const { params } = match;

    /* Function to replace the incomplete img url
    using regex */
    const parseBody = bodyContent =>
        bodyContent.replace(new RegExp(IMG_INVALID_TEXT, 'g'), IMG_BASE_URL);

    /* On update of params i.e. when changing route
    then set new parsed body using HTML Parser */
    useEffect(() => {
        if (ENVIRONMENT !== 'test') window.scrollTo(0, 0);
        if (article) {
            setBody(parseBody(article.body));
        }
    }, [params]);

    /* Conditionally render content, in case there is
    no article to render the NoMatch component */
    const content = article ? (
        <div className={style.articleContainer}>
            <h3>
                <span>{AUTHORS_LABEL}</span>
                {article.authors ? (
                    article.authors.map((author, i) => (
                        <span key={author + i}><em>{author}</em></span>
                    ))
                ) : (
                    <span><em>n/a</em></span>
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
