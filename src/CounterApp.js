import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value = 10} ) =>{

    const [ counter, setCounter ] = useState(value); // []
    
    // handleAdd
    const handleAdd  = () =>{
        setCounter (counter + 1);
        //setCounter( ( c ) => c + 1 );    
    }

    const handleSubytract = () =>  setCounter(counter - 1);
    const handelReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handelReset }>Reset</button>
            <button onClick={ handleSubytract }>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}


export default CounterApp;