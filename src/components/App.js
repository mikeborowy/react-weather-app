import React from 'react';
import { hot } from 'react-hot-loader';
import MainScreen from './mainScreen/MainScreen';

const App = () => {
    return(
        <MainScreen />
    );
}; 

export default hot(module)(App);
