import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {dayData} from '../../testData';
import Root from '../../../Root';
import CurrentDayWeather from '../../../components/mainScreen/currentDayWeather/CurrentDayWeather';
import MainScreen from '../../../components/mainScreen/MainScreen';

describe('test CurrentDayWeather component', () => {
    let component;
    const  initialState = {
        weather: {
            day: dayData
        }
    };
    
    beforeEach( () => {
        component = mount(
            <Root initialState={initialState}>
                <CurrentDayWeather />
            </Root>
        );
    });

    afterEach( () => {
        component.unmount();
    });

    it('checks images', () => {
       expect(component.find('img').length).toEqual(3);
    }); 

});