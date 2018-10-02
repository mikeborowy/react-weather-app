import React from 'react';
import PropTypes from 'prop-types';
import {iconsGFX} from '../../../assets/icons/icons';

const DayWeather = (props) => {
    const {dayHeader, dayProps} = props;

    function addZero(i) {
        return i = i < 10 ? '0' + i: i;
    }

    return(
        <div className='day-col'>
            <h4>{dayHeader}</h4>
            <ul>
                {dayProps.map( (dayProp, id) => {
                    const time = dayProp.fixedHour;
                    const weather = {...dayProp.weather[0]};
                    const {icon} = weather;
                    const {temp} = dayProp.main;
                    const wind = dayProp.wind.speed;

                    return (
                        <li key={id} className='day-row'>
                            <div className='day-data'>
                                <div className='day-data-time'>{time}</div>
                                <div className='day-data-temp'>{temp}</div>
                                <div className='day-data-wind'>{wind}</div>
                            </div>
                            <img src={iconsGFX[`i_${icon}`]} width={40} height={40}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DayWeather;