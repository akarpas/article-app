import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { data } from '../data/articles.json';

import style from './Article.scss';

const IMG_BASE_URL = '<img src="https://cdn2.audiencemedia.com';

const Article = props => {
    const [body, setBody] = useState("<div></div>")
    const { match, updateArticleIndex } = props;
    const { params } = match;
    const { index } = params;
    const article = data[index];
    const { authors } = article;

    const parseBody = bodyContent => {
        return bodyContent.replace(new RegExp('<img src="', 'g'), IMG_BASE_URL);
    };

    useEffect(() => {
        updateArticleIndex(index);
        setBody(parseBody(article.body))
    }, [params]);



    // const body = parseBody(article.body);

    return (
        <div>
            <h3>
                {authors &&
                    article.authors.map((author, i) => (
                        <span key={author + i}>{author}</span>
                    ))}
            </h3>
            <div className={style.articleBody}>{ReactHtmlParser(body)}</div>
        </div>
    );
};

export default withRouter(Article);

Article.propTypes = {
    updateArticleIndex: PropTypes.func,
    match: PropTypes.object
};
