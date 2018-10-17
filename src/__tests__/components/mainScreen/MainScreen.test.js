import React from 'react';
import expect from 'expect';
import moxios from 'moxios';
import {mount} from 'enzyme';
import {dayData, daysData} from '../../testData';
import Root from '../../../Root';
import App from '../../../components/App';
import MainScreen from '../../../components/mainScreen/MainScreen';
import CurrentDayWeather from '../../../components/mainScreen/currentDayWeather/CurrentDayWeather';
import DayWeather from '../../../components/mainScreen/dayWeather/DayWeather';

describe('test MainScreen component', () => {
    let component;
    beforeEach( () => {
        moxios.install();
    });
    
    afterEach( () => {
        moxios.uninstall();
    });

    it('renders CurrentDayWeather when axios call returns data', (done) => {
    
        component = mount(
            <Root>
                <CurrentDayWeather />
            </Root>
        );

        moxios.stubRequest('http://api.openweathermap.org/data/2.5/weather?q=warsaw,pl&units=metric&appid=3da79bab253d46146f115cbe669dba51', {
            status: 200,
            response: {dayData}
        });

        moxios.wait( () => {
            component.update();
            expect(component.find(CurrentDayWeather).length).toEqual(1);
            done();
            component.unmount();
        });
    });

    it('renders DayWeather when axios call returns data', (done) => {
    
        component = mount(
            <Root>
                <DayWeather />
            </Root>
        );
        
        moxios.stubRequest('https://api.openweathermap.org/data/2.5/forecast?q=warsaw,pl&units=metric&appid=3da79bab253d46146f115cbe669dba51', {
            status: 200,
            response: {daysData}
        });

        moxios.wait( () => {
            component.update();
            expect(component.find(DayWeather).length).toEqual(1);
            done();
            component.unmount();
        });
    });
});
