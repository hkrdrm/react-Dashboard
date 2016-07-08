require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';

import CompaniesList from './Companies';
import PolicyProcedures from './PolicyProcedures';

class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div style={this.props.style}>
        <CompaniesList innerStyle={this.props.innerStyle} />
        <PolicyProcedures style={Styles.InnerComponent} innerStyle={Styles.InnerRight} />
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
