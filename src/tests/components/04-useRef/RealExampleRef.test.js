
import React from 'react';
import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';


describe('pruebas en useRef', () => {  
    const wrapper = shallow(< RealExampleRef/>);

    test('debe de mostrarse correctamente', () => {  
      
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);



    })

    
    test('debe de mostrarse el componente', () => {  

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
        



        
    })
})