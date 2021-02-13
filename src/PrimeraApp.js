import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo } ) =>{

    //Validar si manda el saludo 
    return (
        //es un fragment
        <>
            <h1>{ saludo }!!</h1>
            {/*<pre>{ JSON.stringify(saludo, null, 3) }</pre>*/}
            <p>{subtitulo}</p>
        </>
    );
}

//Valido el componente que tiene que mandar las propiedades necesarias
PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;