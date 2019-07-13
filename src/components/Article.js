import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { data } from '../data/articles.json';

const Article = props => {
    const { match, updateArticleIndex } = props;
    const { params } = match;
    const { index } = params;
    const article = data[index];

    useEffect(() => {
        updateArticleIndex(index);
    }, [params]);

    return <div>article {article.title}</div>;
};

export default withRouter(Article);

Article.propTypes = {
    updateArticleIndex: PropTypes.func,
    match: PropTypes.object
};
