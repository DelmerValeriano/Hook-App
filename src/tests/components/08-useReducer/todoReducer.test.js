import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('pruebas en todo reducer', () => {  

    test('debe de retornar el estado correctamente', () => {  
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
        
    });

    test('debe de agregar un nuevo estado correctamente', () => {  
       const newTodo={
            id:3,
            desc: 'Aprender Mongo',
            done:false,
        }
        const action={
            type: 'add', 
            payload: newTodo,

        };
        const state = todoReducer(demoTodos,action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,newTodo]);
        
    });

    test('debe de eliminar  estado correctamente', () => {  
         const action={
             type: 'delete', 
             payload:1,
 
         };
         const state = todoReducer(demoTodos,action);
         expect(state.length).toBe(1);
         expect(state).toEqual([demoTodos[1]]);
 
         
     });
     test('debe de hacer el Toggle del todo', () => {  
        const action={
            type: 'toggle', 
            payload:1,

        };
        const state = todoReducer(demoTodos,action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

        
    });
 

})