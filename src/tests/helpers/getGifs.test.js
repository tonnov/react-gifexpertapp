import React from 'react'
import { shallow } from 'enzyme'
import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs', () => {

    test('should get 5 items', async () => {
        const gifs = await getGifs('Matrix');
        expect(gifs.length).toBe(5);
    })

    test('empty term should return zero elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
