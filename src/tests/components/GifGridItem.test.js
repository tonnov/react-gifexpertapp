import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas de GifGridItem',() => {

    const title = "titulo";
    const url = "https://imagenes.com/mygif.gif";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Paragraph must be contained along with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('string props should match to rendered attributes', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('div should have class ', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('card')).toBe(true);
        
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
})