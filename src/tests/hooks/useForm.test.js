import {renderHook,act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('pruebas en el useForm', () => {  

    const initialForm={
        name:'Delmer',
        email: 'delmer@example.com'
    };

    test('debe de regresar un formulario por defecto ', () => {  
        const {result} =renderHook(()=>useForm(initialForm));
        const [Formvalues, handleInputChange,reset]=result.current;

        expect(Formvalues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');



    });
    test('debe de cambiar el valor del formulario (cambiar name)  ', () => {  
        const {result} =renderHook(()=>useForm(initialForm));
        const [, handleInputChange]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Delmer'

                } 
            })
        });
        const [Formvalue]=result.current;
        expect(Formvalue).toEqual({...initialForm,name:'Delmer'});




    });
    test('debe de establecer el fromulario con resert ', () => {  

        const {result} =renderHook(()=>useForm(initialForm));
        const [, handleInputChange,reset]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Delmer'

                } 
            })
            reset();
        });
        const [Formvalue]=result.current;
        expect(Formvalue).toEqual(initialForm);



    });

})