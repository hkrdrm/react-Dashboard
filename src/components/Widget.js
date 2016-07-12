require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';


/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <Paper zDepth={3} style={{display: 'inline-block', verticalAlign: 'top', width: this.props.width, margin: 10}}>
        <AppBar title={this.props.title} />
        <div style={{padding: 10}}>
          {this.props.children}
        </div>
      </Paper>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
