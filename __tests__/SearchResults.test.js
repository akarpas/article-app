import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Search from '../src/components/Search';

const wrapper = mount(
    <BrowserRouter>
        <Search />
    </BrowserRouter>
);

it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
});

it('updates input and shows a list of results', () => {
    wrapper.find('input').simulate('change', { target: { value: 'google' } });
    wrapper.update();
    expect(wrapper.find('input').props().value).toEqual('google');
    expect(wrapper.find('.results').length).toEqual(1);
    expect(wrapper.find(Link).length).toBeGreaterThan(0);
});

it('updates on click and results close', () => {
    wrapper
        .find(Link)
        .first()
        .simulate('click');
    wrapper.update();
    expect(wrapper.find('.results').length).toEqual(0);
    expect(wrapper.find('input').props().value).toEqual('');
});
