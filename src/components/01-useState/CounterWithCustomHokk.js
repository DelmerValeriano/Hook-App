import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHokk = () => {

    const {state,increment,decrement,resert}  = useCounter(100);
    
  return (
      <>
        <h1>Counter with Hook: {state}</h1>
        <hr/>

        <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
        <button className="btn btn-primary" onClick={ resert }>reset</button>
        <button className="btn btn-primary" onClick={ () => decrement(3) }>-1</button>


      
      </>
    
  )
}
