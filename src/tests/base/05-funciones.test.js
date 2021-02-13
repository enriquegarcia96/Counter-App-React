import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        // analiza cada una de las propiedades del objeto
        expect( user ).toEqual( userTest );  
    })

    // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name = 'Diana';

        const user2 = getUsuarioActivo(name);
        
        expect( user2 ).toEqual({
            uid:'ABC567',
            username: name
        });
    })
    
})
