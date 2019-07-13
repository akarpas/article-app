import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { data } from '../data/articles.json';

const IMG_BASE_URL = '<img src="https://cdn2.audiencemedia.com';

const Article = props => {
    const { match, updateArticleIndex } = props;
    const { params } = match;
    const { index } = params;
    const article = data[index];
    const { authors } = article;

    useEffect(() => {
        updateArticleIndex(index);
    }, [params]);

    const parseBody = body => {
        return body.replace(new RegExp('<img src="', 'g'), IMG_BASE_URL);
    };

    const body = parseBody(article.body);

    return (
        <div>
            <h3>
                {authors &&
                    article.authors.map((author, i) => (
                        <span key={author + i}>{author}</span>
                    ))}
            </h3>
            <div>{ReactHtmlParser(body)}</div>
        </div>
    );
};

export default withRouter(Article);

Article.propTypes = {
    updateArticleIndex: PropTypes.func,
    match: PropTypes.object
};
