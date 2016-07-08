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
        <Subheader style={Styles.SubHeader}>Common Reference Documents</Subheader>
        <ListItem primaryText="Chart of Accounts" url='files/TPX_Chart_of_Accounts.xlsx' target='_self' />
        <ListItem primaryText="Current Intercompany Spreadsheet" url='files/TPX_Chart_of_Accounts.xlsx' target='_self' />
        <ListItem primaryText="CSpire Cell Site Listing" url='files/CSI_ActiveLocations.xlsx' target='_self' />
        <ListItem primaryText="Financials Deficiency Report" url='files/FinancialsDeficiencyReport.xlsx' target='_self' />
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
