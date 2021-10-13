import React from 'react'
import { shallow } from 'enzyme'
import { GiftExpertApp } from '../GiftExpertApp'

describe('Test suite for GifExpertApp', () => {
    
    test('should match snapshot', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should render a category list', () => {
        const categories = ['matrix', 'leon'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
