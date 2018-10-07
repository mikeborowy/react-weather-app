import React from 'react';
import PropTypes from 'prop-types';
import DayWeatherItem from './DayWeatherItem';

const propTypes = {
    dayHeader: PropTypes.string.isRequired,
    dayProps: PropTypes.array.isRequired
};

const defaultProps = {
    dayHeader: '',
    dayProps: []
};

const DayWeather = ({dayHeader, dayProps}) => {
    return(
        <div className="day-col">
            <h4>{dayHeader}</h4>
            <ul>
                {dayProps.map( (dayProp, id) => {
                    const time = dayProp.fixedHour;
                    const weather = {...dayProp.weather[0]};
                    const {icon} = weather.icon;
                    const {temp} = dayProp.main.temp;
                    const wind = dayProp.wind.speed;

                    return (
                    <DayWeatherItem 
                        key={id} 
                        time={time} 
                        weather={weather} 
                        icon={icon} 
                        temp={temp} 
                        wind={wind} 
                    />
                    );
                })}
            </ul>
        </div>
    );
};

DayWeather.propTypes = propTypes;
DayWeather.defaultProps = defaultProps;

export default DayWeather;