import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('should return initial value', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('matrix'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return img array and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('matrix'));
        
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(5);
        expect(loading).toBe(false);

    })
    
})
