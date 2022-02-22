import React, { useLayoutEffect, useRef, useState }  from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
// import '../02-useEffect/effects.css';
import './layout.css'

export const Layout = () => {


    const {counter,increment} =useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];
    const ptag = useRef();
    const [boxiSize, setBoxiSize] = useState({})

    useLayoutEffect(()=>{
        setBoxiSize(ptag.current.getBoundingClientRect());

    },[quote])

    
  

    return (
    <div>
        <h1 className="text-center">LayoutEffect</h1>
        <hr/>

        <blockquote className="blockquote text-end">
            <p className="mb-3"
                ref={ptag}
            >{quote}</p>
         </blockquote>

         <pre>
             {JSON.stringify(boxiSize,null,3)}
         </pre>
       
        <button className="btn btn-primary" onClick={increment}>
            Siguiente quote
        </button>


     
    </div>
  )
}
