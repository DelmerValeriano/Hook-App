import React from 'react';
import {shallow} from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('pruebas en el <TodoAdd/>', () => {  

    const handleAddTodo =jest.fn();

    const wrapper = shallow(<TodoAdd
        handleAddTodo={handleAddTodo}
    />)

    test('debe de mostrarse correctamente', () => {  
        expect(wrapper).toMatchSnapshot();

    });

    test('No debe de llamar al handleAddTodo', () => {  
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
       
    });
    test('debe de llamar al handleAddTodo', () => {  
        const value ='Aprende react';
        wrapper.find('input').simulate('change',{
            target:{
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toBeCalledWith(expect.any(Object));
        expect(handleAddTodo).toBeCalledWith({
            id: expect.any(Number),
            desc:value,
            done:false,

        });
        expect(wrapper.find('input').prop('value')).toBe('');





       
    });


})
