import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopNav from './components/TopNav'
import Robot from './components/Robot'

class App extends Component {
  render() {
    return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <TopNav/>
            </MuiThemeProvider>
            <Robot/>
        </div>
    );
  }
}

export default App;
