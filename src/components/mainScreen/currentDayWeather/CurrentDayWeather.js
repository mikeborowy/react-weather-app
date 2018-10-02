import React from 'react';
import PropTypes from 'prop-types';
import {iconsGFX} from '../../../assets/icons/icons';

const propTypes = {
    date: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    iconDesc: PropTypes.string.isRequired
};
  
const defaultProps = {};

const CurrentDayWeatherProps = (props) => {
    const timeArr = new Date(props.date * 1000).toDateString().split(' '); 

    return(
        <div>
            {props.cityName}, 
            {props.country}
            <br/>
            {timeArr[1]}\
            {timeArr[2]}\
            {timeArr[3]},
            {timeArr[0]}
            <img src={iconsGFX[`i_${props.icon}`]}/>
        </div>
    );
};

CurrentDayWeatherProps.propTypes = propTypes;
CurrentDayWeatherProps.defaultProps = defaultProps;

export default CurrentDayWeatherProps;