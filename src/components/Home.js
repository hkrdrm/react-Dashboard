require('normalize.css');
require('styles/App.css');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconPanel from './IconPanel';
import IconButton from 'material-ui/IconButton';
import { grey200 } from 'material-ui/styles/colors';
import FinanceIcon from 'material-ui/svg-icons/Action/account-balance';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Styles from '../styles/GlobalStyles';

class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div>

        <AppBar title="Telapex Accounting Dept"
          iconElementLeft={ <IconButton> <FinanceIcon color={grey200} /> </IconButton> } />
        
        <div style={{position: 'relative', margin: '0 auto', padding: 20}}>

          <IconPanel />

          <LeftColumn style={Styles.Component} innerStyle={Styles.InnerLeft} />
          <RightColumn style={Styles.Component} innerStyle={Styles.InnerRight} />

        </div>

      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
