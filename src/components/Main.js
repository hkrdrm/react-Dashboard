require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class AppComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
/*


*/
