import React from 'react';
import PropTypes from 'prop-types';
import {iconsGFX, infoIconsGFX} from '../../../assets/icons/icons';

const propTypes = {
    dayHeader: PropTypes.string.isRequired,
    dayProps: PropTypes.object.isRequired
};

const defaultProps = {
    dayHeader: '',
    dayProps: {}
};

const DayWeather = (props) => {
    const {dayHeader, dayProps} = props;

    function addZero(i) {
        return i = i < 10 ? '0' + i: i;
    }

    return(
        <div className="day-col">
            <h4>{dayHeader}</h4>
            <ul>
                {dayProps.map( (dayProp, id) => {
                    const time = dayProp.fixedHour;
                    const weather = {...dayProp.weather[0]};
                    const {icon} = weather;
                    const {temp} = dayProp.main;
                    const wind = dayProp.wind.speed;

                    return (
                        <li key={id} className="day-row">
                            <div className="day-data">
                                <div className="day-data-time">{time}</div>
                                <div className="day-data-temp">
                                    <img src={infoIconsGFX.temp} width={14} height={14}/>
                                    <span>{temp} °C</span>
                                </div>
                                <div className="day-data-wind">
                                    <img src={infoIconsGFX.wind} width={14} height={14}/>
                                    <span>{wind} km\h</span>
                                </div>
                            </div>
                            <img src={iconsGFX[`i_${icon}`]} className={`icon-${icon}`} width={40} height={40}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

DayWeather.propTypes = propTypes;
DayWeather.defaultProps = defaultProps;

export default DayWeather;