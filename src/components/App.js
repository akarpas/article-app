import React, { useState } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

import { data } from '../data/articles.json';

const App = () => {
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const numberOfArticles = data.length;

    const updateArticleIndex = (articleIndex) => {
        setCurrentArticleIndex(Number(articleIndex));
    };

    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/article/0" />
                <Route path="/article/:index" render={() => <Article updateArticleIndex={updateArticleIndex} />} />
            </Switch>
            <Footer numberOfArticles={numberOfArticles} updateArticleIndex={updateArticleIndex} currentArticleIndex={currentArticleIndex} />
        </React.Fragment>
    );
};

export default withRouter(App);
