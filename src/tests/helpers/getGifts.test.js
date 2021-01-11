import { getGifts } from '../../helpers/getGifts'

describe('Pruebas con getGifts Fetch', () => {
    test('debe de traer 6 elementos', async () => {
        const gifts = await getGifts('Goku');

        expect( gifts.length ).toBe(6)
    });

    test('debe de regresar un error', () => {
        
    })
    
    
})
