import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Footer from '../src/components/Footer';

const wrapper = shallow(
    <Footer numberOfArticles={10} currentArticleIndex={0} hasArticle />
);

it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
});

describe('it displays correct initial next / previous', () => {
    it('contains only one Link', () => {
        expect(wrapper.find(Link).length).toEqual(1);
    });
    it('the link contains text Next', () => {
        expect(wrapper.find(Link).prop('children')).toEqual('Next');
    });
    it('the link has the right path', () => {
        expect(wrapper.find(Link).props().to).toEqual('/article/1');
    });
});
