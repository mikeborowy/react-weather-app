import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import App from '../../components/App';
import MainScreen from '../../components/mainScreen/MainScreen';

let component;

beforeEach( () => {
    component = shallow(<App />);
});
describe('test App component', () => {
  it('shows MainScreen', () => {
    expect(component.find(MainScreen).length).toEqual(1);
  });
});
