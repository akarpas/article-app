import React, { useState, useEffect } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import Article from './Article';
import Footer from './Footer';

import style from './App.scss';

import { data } from '../data/articles.json';

const App = props => {
    const { location } = props;
    const { pathname } = location;
    const param = Number(pathname.split('/')[2]);
    const [hasArticle, setHasArticle] = useState(false);
    const [currentArticleIndex, setCurrentArticleIndex] = useState(
        typeof param !== 'number' ? 0 : param
    );
    const numberOfArticles = data.length;

    useEffect(() => {
        setCurrentArticleIndex(Number(pathname.split('/')[2]));
    }, [param]);

    return (
        <div className={style.appContainer}>
            <Header articleTitle={data[currentArticleIndex].title} />
            <Search />
            <Switch>
                <Redirect exact from="/" to="/article/0" />
                <Route
                    path="/article/:index"
                    render={() => (
                        <Article
                            article={data[currentArticleIndex]}
                            setHasArticle={set => setHasArticle(set)}
                        />
                    )}
                />
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
