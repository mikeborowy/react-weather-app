import expect from 'expect';
import {dayData} from '../testData';
import {
    weather, 
    onSetSingleDayWeather,
    types
} from '../../reducers/weather';

describe('test weather reducer and actions', () => {
    const day = {...dayData};
    /* Test Actions START */
    it('handles SET_SINGLE_DAY_WEATHER action', () => {
        const action = {
            type: types.SET_SINGLE_DAY_WEATHER,
            day
        };
        const newState = weather({}, action);
        expect(newState).toEqual({day}); 
    });
    /* Test Reducers END */
    
    /* Test Reducers START */
    it('has the correct type', () => {
        const action = onSetSingleDayWeather();
        expect(action.type).toEqual(types.SET_SINGLE_DAY_WEATHER);
    });

    it('has correct day payload', () => {
        const action = onSetSingleDayWeather(day);
        expect(action.day).toEqual(day);
    });
    /* Test Actions END */
});
