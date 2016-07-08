require('normalize.css');
require('styles/App.css');

import React from 'react';
import Paper from 'material-ui/Paper';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import ListItem from './ListItem';
import Subheader from 'material-ui/Subheader';
import Styles from '../styles/GlobalStyles';

/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div style={this.props.style}>
      <Paper style={this.props.innerStyle}  zDepth={2}>
      <List>
        <Subheader style={Styles.SubHeader}>Intranet Sites</Subheader>
        <ListItem primaryText="HR Forms" url='https://www.telapexinc.com/hr/' target='_blank' />
        <ListItem primaryText="CSpire Department Contacts" url='http://www.cspire.net/departments/' target='_blank' />
      </List>
      </Paper>
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
