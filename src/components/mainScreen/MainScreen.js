//React
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
//Store
import {onGetWeatherAjax} from '../../store/reducers/weather';
//MDL
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
//3rd party
import _ from 'lodash';
//Config
import {mdlStyles} from '../common/mdlSyles';
//Components
import CurrentDayWeather from './currentDayWeather/CurrentDayWeather';
import DayWeather from './dayWeather/DayWeather';

const propTypes = {
  classes: PropTypes.object.isRequired,
  day: PropTypes.object.isRequired,
  days: PropTypes.object.isRequired,
};

const defaultProps = {
  classes: {},
  day: {},
  days: {}
};

class MainScreen extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetWeatherAjax('warsaw','pl', 1);
    this.props.onGetWeatherAjax('warsaw','pl', 5);
  }

  renderCurrentDay() {
    if(_.isEmpty(this.props.day) !== true)
    {
      const {day} = this.props;
      const currentDayProps = {
        date: day.dt,
        cityName: day.name,
        country: day.sys.country,
        humidity: day.main.humidity,
        pressure: day.main.pressure,
        temp: day.main.temp,
        tempMax: day.main.temp_max,
        tempMin: day.main.temp_min,
        icon: day.weather[0].icon,
        iconDesc: day.weather[0].main
      };
      return <CurrentDayWeather {...currentDayProps}/>;
    }
  }

  renderDays() {
    return(
      [0, 1, 2, 3, 4].map(value => (
        <Grid key={value} item>
          <DayWeather dayNum={value} />
        </Grid>
      ))
    );
  }

  render() {
    const {classes} = this.props;

    return(
      <React.Fragment>
      <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container justify="center">
              <Grid item>
                {this.renderCurrentDay()}
              </Grid>
              <Grid container justify="center">
                {this.renderDays()}
              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
} 

MainScreen.propTypes = propTypes;
MainScreen.defaultProps = defaultProps;

const MainScreenWithMDL = withStyles(mdlStyles)(MainScreen);

function mapStateToProps(state) {
  return {
    day: state.weather.day,
    days: state.weather.days
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({   
    onGetWeatherAjax
  }, dispatch);
}

export default ReactRedux.connect(
  mapStateToProps, 
  mapDispatchToProps
)(MainScreenWithMDL);