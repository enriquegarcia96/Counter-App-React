import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('debe de retonar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        
        const heroeData = heroes.find( h => h.id === id ) ;

        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retonar un undefined si Heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })

    // toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        //creo otro arreglo para ver si son iguales
        const heroesData = heroe.filter( h => h.owner === owner );
        expect( heroe ).toEqual( heroesData );
    })
    

    
    // length = 2
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner)


        expect( heroe.length ).toBe(2);
        
    })
    
    
    
})
