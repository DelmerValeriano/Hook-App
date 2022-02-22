import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import {mount} from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('pruebas en HomeScreen', () => {  
    const user={
        name:'Delmer', 
        email: 'delmer@gmail.com',
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen/>

        </UserContext.Provider>
        
    );


    test('debe de mostrarse correctamente', () => {  
        expect(wrapper).toMatchSnapshot();


    })


})