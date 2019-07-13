import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import NoMatch from './NoMatch';

import { data } from '../data/articles.json';

import style from './Article.scss';

const IMG_BASE_URL = '<img src="https://cdn2.audiencemedia.com';

const Article = props => {
    const [body, setBody] = useState('<div></div>');
    const { match, updateArticleIndex, updateArticleTitle, setHasArticle } = props;
    const { params } = match;
    const { index } = params;
    const article = data[index];

    const parseBody = bodyContent => {
        return bodyContent.replace(new RegExp('<img src="', 'g'), IMG_BASE_URL);
    };

    useEffect(() => {
        if (article) {
            updateArticleIndex(index);
            updateArticleTitle(article.title);
            setHasArticle(true);
            setBody(parseBody(article.body));
            window.scrollTo(0, 0);
        } else {
            setHasArticle(false);
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
    updateArticleIndex: PropTypes.func,
    updateArticleTitle: PropTypes.func,
    match: PropTypes.object
};
