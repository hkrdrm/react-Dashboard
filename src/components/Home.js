require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey200 } from 'material-ui/styles/colors';
import Styles from '../styles/GlobalStyles';
import Widget from './Widget';
import Accounts from './charts/Accounts';
import Tickets from './charts/Tickets';
import Payments from './charts/Payments';
import ResponsiveLayout from './ResponsiveLayout';
import rd3 from 'rd3';
var WidthProvider = require('react-grid-layout').WidthProvider;
var Responsive = require('react-grid-layout').Responsive;
var ResponsiveReactGridLayout = WidthProvider(Responsive);


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {



    return (
      <div className='main'>

        <Widget title='Tickets'>
            <Tickets /> 
        </Widget>

        <Widget title='Accounts'>
            <Accounts width={400}  height={250}  />
        </Widget>
        
        <Widget title='Total Payments'>
          <Payments width={400}  height={250}  />
        </Widget>

        <Widget title='Web Payments'>
          <Payments width={400}  height={250}  />
        </Widget>

        <Widget title='Website Hits'>
            <Tickets /> 
        </Widget>
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;