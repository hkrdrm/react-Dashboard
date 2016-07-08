require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import cookie from 'cookie_js';
import jwtDecode from 'jwt-decode';
import {browserHistory} from 'react-router';

class AppComponent extends React.Component {
  constructor(){
    super();
    let token = cookie.get('token');
    this.state = {
                   open: false,
                   user: jwtDecode(token)
                 }
  }

  getChildContext = () => {
    return { muiTheme: getMuiTheme(CeruleanTheme) }
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      open: !(this.state.open),
      anchorEl: event.currentTarget
    });
  }
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }

  logout = () => {
    cookie.remove('token');
    browserHistory.push('/finance/');
  }

  render() {
    return (
      <Menu>
        <MenuItem style={Styles.AltMenu} primaryText={this.state.user.cn} rightIcon={<ArrowDropDown />} onTouchTap={this.handleClick} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>

          <Menu>
            <MenuItem style={Styles.ChromeHack} value={1} primaryText="Logout" onTouchTap={this.logout} />
          </Menu>
        </Popover>
      </Menu>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
