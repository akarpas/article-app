import React, { useState, useEffect } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import Article from './Article';
import Footer from './Footer';
import NoMatch from './NoMatch';

import style from './App.scss';

import { data } from '../data/articles.json';

const SearchComponent = React.memo(Search);

const App = props => {
    /* Get param of URL for article indexing using
    the location from props and set the current index */
    const { location } = props;
    const { pathname } = location;
    const param = Number(pathname.split('/')[2]);
    const [currentArticleIndex, setCurrentArticleIndex] = useState(
        typeof param !== 'number' ? 0 : param
    );
    /* Get number of articles from length of array
    to use for the navigation in the footer */
    const numberOfArticles = data.length;
    /* Get current article properties to pass to
    the Article component */
    const article = data[currentArticleIndex];
    const articleTitle = article ? article.title : '';
    const hasArticle =
        article &&
        (Object.keys(article).length !== 0 || article.constructor !== Object);

    /* On param change then change state of currentIndex using
    location prop */
    useEffect(() => {
        setCurrentArticleIndex(Number(pathname.split('/')[2]));
    }, [param]);

    return (
        <div className={style.appContainer}>
            <Header articleTitle={articleTitle} />
            <SearchComponent />
            <Switch>
                <Redirect exact from="/" to="/article/0" />
                <Route
                    path="/article/:index"
                    render={() => <Article article={article} />}
                />
                <Route component={NoMatch} />
            </Switch>
            <Footer
                hasArticle={hasArticle}
                numberOfArticles={numberOfArticles}
                currentArticleIndex={currentArticleIndex}
            />
        </div>
    );
};

export default withRouter(App);

App.propTypes = {
    location: PropTypes.object
};
