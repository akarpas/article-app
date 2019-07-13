import React, { useState } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Article from './Article';
import Footer from './Footer';

import { data } from '../data/articles.json';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [articleTitle, setArticleTitle] = useState('');
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const numberOfArticles = data.length;

    const updateArticleIndex = articleIndex => {
        setCurrentArticleIndex(Number(articleIndex));
    };

    const handleInputChange = event => {
        const { target } = event;
        const { value } = target;
        setSearchTerm(value);
        if (value === '') {
            setIsSearch(false);
        } else {
            setIsSearch(true);
        }
    };

    const updateArticleTitle = title => {
        setArticleTitle(title);
    }

    const updateSearchInput = () => {
        setSearchTerm('');
        setIsSearch(false);
    };

    return (
        <React.Fragment>
            <Header articleTitle={articleTitle} />
            <Search
                updateSearchInput={updateSearchInput}
                isSearch={isSearch}
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
            />
            <Switch>
                <Redirect exact from="/" to="/article/0" />
                <Route
                    path="/article/:index"
                    render={() => (
                        <Article updateArticleIndex={updateArticleIndex} updateArticleTitle={updateArticleTitle} />
                    )}
                />
            </Switch>
            <Footer
                numberOfArticles={numberOfArticles}
                updateArticleIndex={updateArticleIndex}
                currentArticleIndex={currentArticleIndex}
            />
        </React.Fragment>
    );
};

export default withRouter(App);
