import React from 'react'
import { shallow, mount } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component tests', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = mount(<AddCategory setCategories={setCategories}/>);
    })
    

    test('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change input value', () => {
        // const component = mount(<AddCategory setCategories={setCategories}/>);
        const value = 'H3ll 0world';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('should not send data through submit with empty value', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean textbox', () => {
        const value = 'H3ll 0world';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
    
    
    
})
