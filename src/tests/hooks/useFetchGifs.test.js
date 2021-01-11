const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifts } = require("../../hooks/useFetchGifs")

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifts('One Punch') )
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true)
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifts('One Punch') )
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(6);
        expect( loading ).toBe(false)
    })
    
    
})