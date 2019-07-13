import React, { useState } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Article from './Article';
import Footer from './Footer';

import style from './App.scss';

import { data } from '../data/articles.json';

const App = () => {
    const [hasArticle, setHasArticle] = useState(false);
    const [articleTitle, setArticleTitle] = useState('');
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const numberOfArticles = data.length;

    const updateArticleIndex = articleIndex => {
        setCurrentArticleIndex(Number(articleIndex));
    };

    const updateArticleTitle = title => {
        setArticleTitle(title);
    };

    return (
        <div className={style.appContainer}>
            <Header articleTitle={articleTitle} />
            <Search />
            <Switch>
                <Redirect exact from="/" to="/article/0" />
                <Route
                    path="/article/:index"
                    render={() => (
                        <Article
                            updateArticleIndex={updateArticleIndex}
                            updateArticleTitle={updateArticleTitle}
                            setHasArticle={(set) => setHasArticle(set)}
                        />
                    )}
                />
            </Switch>
            <Footer
                hasArticle={hasArticle}
                numberOfArticles={numberOfArticles}
                updateArticleIndex={updateArticleIndex}
                currentArticleIndex={currentArticleIndex}
            />
        </div>
    );
};

export default withRouter(App);
