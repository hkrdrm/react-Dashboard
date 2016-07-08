require('normalize.css');
require('styles/App.css');

import React from 'react';
import Paper from 'material-ui/Paper';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import ListItem from './ListItem';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import Styles from '../styles/GlobalStyles';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let deltaAry    = [
                    <ListItem primaryText='Expense Report' url='files/DTC_Expense_Report.xlsx' target='_self' key={0} />,
                    <ListItem primaryText='Active Locations List' url='files/DTC_ActiveLocations.xlsx' target='_self' key={1} />,
                    <ListItem primaryText='Active Projects List' url='files/DTC_ActiveProjects.xlsx' target='_self'  key={2} />,
                    <ListItem primaryText='Active Items Listing' url='files/DTC_ActiveItems.xlsx'  target='_self' key={3} />,
                    <ListItem primaryText="Active Vendors List" url='files/DTC_ActiveVendors.xlsx' target='_self' />
                  ];

let franklinAry = [
                    <ListItem primaryText='Expense Report' url='files/FTC_Expense_Report.xlsx' target='_self' key={0} />,
                    <ListItem primaryText='Active Locations List' url='files/FTC_ActiveLocations.xlsx' target='_self' key={1} />,
                    <ListItem primaryText='Active Projects List' url='files/FTC_ActiveProjects.xlsx' target='_self' key={2} />,
                    <ListItem primaryText='Active Items Listing' url='files/FTC_ActiveItems.xlsx' target='_self' key={3} />,
                    <ListItem primaryText="Active Vendors List" url='files/FTC_ActiveVendors.xlsx' target='_self' />
                  ];


let telapexAry   = [
                    <ListItem primaryText='Expense Report' url='files/TPI_Expense_Report.xlsx' target='_self' key={0} />,
                    <ListItem primaryText='Active Projects List' url='files/TPI_ActiveProjects.xlsx' target='_self' key={2} />,
                    <ListItem primaryText='Time Codes' url='files/TPI_TimeCode_List.xlsx' target='_self' key={3} />
                  ];

class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div style={this.props.style}>
      <Paper style={this.props.innerStyle} zDepth={2} >
        <Tabs>
          <Tab
              icon={<Avatar style={{backgroundRepeat: 'no-repeat'}} size={50} src="images/delta.png" />}
              style={Styles.NoUpper}
              label="Delta">

              <List>
                <Subheader>Delta</Subheader>
                {deltaAry}
              </List>

          </Tab>

          <Tab
              icon={<Avatar size={50} src="images/franklin_scaled.png" />}
              style={Styles.NoUpper}
              label="Franklin">

              <List>
                <Subheader>Franklin</Subheader>
                {franklinAry}
              </List>

          </Tab>

          <Tab
              icon={<Avatar size={50} src="images/telapex.png" />}
              style={Styles.NoUpper}
              label="Telapex">

              <List>
                <Subheader>Telapex</Subheader>
                {telapexAry}
              </List>

          </Tab>
        </Tabs>
      </Paper>
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
/*
          <Tab
              icon={<Avatar size={50} src="../images/networks.png" />}
              style={Styles.NoUpper}
              label="Networks">

              <List>
                <Subheader>Networks</Subheader>
                {networksAry}
              </List>

          </Tab>

let networksAry  = [
                    <ListItem primaryText='Expense Report' style={Styles.ChromeHack} key={0} />,
                    <ListItem primaryText='Active Locations List' style={Styles.ChromeHack} key={1} />,
                    <ListItem primaryText='Active Projects List' style={Styles.ChromeHack} key={2} />,
                    <ListItem primaryText='Active Items Listing' style={Styles.ChromeHack} key={3} />
                  ];

*/