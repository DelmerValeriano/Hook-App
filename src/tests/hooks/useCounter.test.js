import {renderHook,act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('prueba en useCounter', () => {  
    test('debe de retornar valores por defecto', () => {  
       
        const {result} =renderHook(()=>useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.resert).toBe('function');



    });
    test('debe de tener counter en 100', () => {  
       
        const {result} =renderHook(()=>useCounter(100));
        
        expect(result.current.counter).toBe(100);

    });
    test('debe de incrementar en counter en 1', () => { 
        const {result} =renderHook(()=>useCounter(100));
        const {increment} =result.current;
        act(()=>{
            increment();
        });
        const {counter} =result.current;
        expect(counter).toBe(101);



    });
    test('debe de decrecer en counter en 1', () => { 
        const {result} =renderHook(()=>useCounter(100));
        const {decrement} =result.current;
        act(()=>{
            decrement();
        });
        const {counter} =result.current;
        expect(counter).toBe(99);



    });
    test('debe de recetear en counter en en su valor', () => { 
        const {result} =renderHook(()=>useCounter(100));
        const {decrement,resert} =result.current;
        act(()=>{
            decrement();
            resert();
        });
        const {counter} =result.current;
        expect(counter).toBe(100);



    });
});