require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Widget from './Widget';
import Accounts from './charts/Accounts';
import Tickets from './charts/Tickets';
import rd3 from 'rd3';
var WidthProvider = require('react-grid-layout').WidthProvider;
var Responsive = require('react-grid-layout').Responsive;
var ResponsiveReactGridLayout = WidthProvider(Responsive);


/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 12},
      {i: 'b', x: 3, y: 0, w: 2, h: 12},
      {i: 'c', x: 6, y: 0, w: 2, h: 12}
    ];

    return (

      <ResponsiveReactGridLayout className="layout" layout={layout} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>

        <div key={'a'}>
          <Widget title='Tickets'>
            <Tickets /> 
          </Widget>
        </div>

        <div key={'b'}>
          <Widget title='Accounts'>
            <Accounts width={250}  height={250}  />
          </Widget>
        </div>

        <div key={'c'}>
          <Widget title='Accounts'>
            <Accounts width={250} height={250}  />
          </Widget>
        </div>
        
      </ResponsiveReactGridLayout>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
