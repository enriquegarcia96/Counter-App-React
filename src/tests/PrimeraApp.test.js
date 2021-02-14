import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp />', () => {

        
    /*
    test('debe de mostrar el mensaje "Hola, soy Enrique"', () => {
        const saludo = 'Hola, soy Enrique';
        const {getByText} = render(<PrimeraApp saludo={ saludo } /> );
        expect( getByText(saludo) ).toBeInTheDocument();
    });*/

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Enrique';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Enrique';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        //busca un parrafo
        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo );
    })
})
