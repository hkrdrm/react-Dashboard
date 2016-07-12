require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import rd3 from 'rd3';


/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    var LineChart = rd3.LineChart
    var lineData = [
      { 
        name: 'Totals',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: 'series2',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
      },
      {
        name: 'series3',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      } 
    ];
    return (
      <LineChart
        legend={true}
        data={lineData}
        width={this.props.width}
        height={this.props.height}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        yAxisLabel="Altitude"
        domain={{x: [,6], y: [-10,]}}
        gridHorizontal={true} />
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;