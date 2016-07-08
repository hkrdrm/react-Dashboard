require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {ListItem} from 'material-ui/List';
import Styles from '../styles/GlobalStyles';

class AppComponent extends React.Component {
  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <a href={this.props.url} target={this.props.target}>
        <ListItem style={Styles.ChromeHack} {...this.props} onTouchTap={this.pushLink} />
      </a>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
