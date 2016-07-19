require('normalize.css');
require('styles/App.css');

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import rd3 from 'rd3';


/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {


  render() {
    var BarChart = rd3.BarChart
    var barData = [
      {
        "name": "Series A",
        "label": "test",
        "values": [
          { "x": 'New', "y":  100},
          { "x": 'Closed', "y": 82},
        ]
      }
    ];
    return (
      <BarChart data={barData} width={250} height={246} />
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;