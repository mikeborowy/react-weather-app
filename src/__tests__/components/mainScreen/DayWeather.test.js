import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {daysData} from '../../testData';
import Root from '../../../store';
import DayWeather from '../../../components/mainScreen/dayWeather/DayWeather';
import DayWeatherItem from '../../../components/mainScreen/dayWeather/DayWeatherItem';

describe('test DayWeather component', () => {
    let component;
    const  initialState = {
        weather: {
            days: daysData
        }
    };

    afterEach( () => {
        component.unmount();
    });

    it('has day-col', () => {
        component = mount(
            <Root initialState={initialState}>
                <DayWeather/>
            </Root>
        );
        expect(component.find('.day-col').length).toEqual(1);
        expect(component.find('h4').length).toEqual(1);
        expect(component.find('ul').length).toEqual(1);
    }); 
    
    it('has day-row data', () => {
        component = mount(
            <Root initialState={initialState}>
                <DayWeatherItem/>
            </Root>
        );
        expect(component.find('.day-row').length).toEqual(1);
        expect(component.find('.day-data').length).toEqual(1);
        expect(component.find('.day-data-time').length).toEqual(1);
        expect(component.find('.day-data-wind').length).toEqual(1);
        expect(component.find('img').length).toEqual(3);
    }); 
});