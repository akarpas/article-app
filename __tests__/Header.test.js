import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

const MAIN_TITLE = 'The Articles Magazine';
const TEST_TITLE = 'Test Title';

const wrapper = shallow(<Header articleTitle={TEST_TITLE} />);

it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
});

describe('it contains a header element', () => {
    it('contains a header element', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });
});

describe('it contains an h1', () => {
    it('contains an h1 element', () => {
        expect(wrapper.find('h1').length).toEqual(1);
    });
    it('contains the correct title', () => {
        expect(wrapper.find('h1').text()).toEqual(MAIN_TITLE);
    });
});

describe('it contains an h3', () => {
    it('contains an h3 element', () => {
        expect(wrapper.find('h3').length).toEqual(1);
    });
    it('contains the correct title', () => {
        expect(wrapper.find('h3').text()).toEqual(TEST_TITLE);
    });
});
