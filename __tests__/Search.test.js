import React from 'react';
import { shallow } from 'enzyme';
import Search from '../src/components/Search';
import SearchResults from '../src/components/SearchResults';

const wrapper = shallow(<Search />);

it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
});

describe('it contains an input for searching', () => {
    it('contains an input element', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });
});

describe('it shows search results on adding input', () => {
    it('has an empty input value', () => {
        expect(wrapper.find('input').props().value).toEqual('');
    });
    it('handles input change and shows results', () => {
        const testValue = 'google';
        wrapper
            .find('input')
            .simulate('change', { target: { value: testValue } });
        wrapper.update();
        expect(wrapper.find('input').props().value).toEqual(testValue);
        expect(wrapper.find(SearchResults).length).toEqual(1);
    });
});
