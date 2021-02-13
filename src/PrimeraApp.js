import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo } ) =>{

    //Validar si manda el saludo 

    return (
        //es un fragment
        <>
            <h1>{ saludo }</h1>
            {/*<pre>{ JSON.stringify(saludo, null, 3) }</pre>*/}
            <p>Mi primera aplicacion</p>
        </>
    );
        
}

//Valido el componente que tiene que mandar las propiedades necesarias
PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}


export default PrimeraApp;