import React from 'react';
import PropTypes from 'prop-types';
//MDL
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
//Config
import {mdlStyles} from './cfg';
//Components
import DailyWeather from '../dailyWeather/DailyWeather';

const styles = mdlStyles;

const propTypes = {
  classes: PropTypes.object.isRequired,
};

class MainScreen extends React.Component{

  render(){
    const { classes } = this.props;

    return(
      <React.Fragment>
      <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container justify="center">
              <Grid item>
                  Current Time Details
              </Grid>
              <Grid container justify="center">
              {[0, 1, 2, 3, 4].map(value => (
                <Grid key={value} item>
                  <DailyWeather dayNum={value} />
                </Grid>
              ))}
              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
} 

MainScreen.propTypes = propTypes;

export default withStyles(styles)(MainScreen);