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
        <Subheader style={Styles.SubHeader}>Support Links</Subheader>
        <ListItem primaryText="Content Central Basic Instructions" url='files/CC_Navigation.pdf' target='_blank' />
        <ListItem primaryText="Request New Vendor or Vendor Address" url='files/CC_Procedures_VendorRequest_RequestorOnly.pdf' target='_blank' />
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
