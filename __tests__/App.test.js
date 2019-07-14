import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/App';
import Article from '../src/components/Article';
import Header from '../src/components/Header';
import Search from '../src/components/Search';
import Footer from '../src/components/Footer';

const wrapper = mount(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
});

it('contains a header component', () => {
    expect(wrapper.find(Header).length).toEqual(1);
});

it('contains an article component', () => {
    expect(wrapper.find(Article).length).toEqual(1);
});

it('contains a search component', () => {
    expect(wrapper.find(Search).length).toEqual(1);
});

it('contains a footer component', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
});
