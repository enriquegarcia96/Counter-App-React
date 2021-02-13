import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Diana', () => {
        const nombre = 'Diana';

    
        //Aplico el estimulo
        const saludo = getSaludo(nombre);
        

        //parte del expect
        expect( saludo ).toBe( 'Hola ' +nombre + '!');
    })


    //getSaludo debe de retornar Hola Enrique! si no hay argumentos nombre
    test('getSaludo debe de retornar Hola Enrique! si no hay argumentos nombre', () => {
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Enrique!');
    })
})
