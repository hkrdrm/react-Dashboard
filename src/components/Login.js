require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import cookie from 'cookie_js';

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class AppComponent extends React.Component {
  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }
  constructor(){
    super();
    this.state = {username: '', password: ''}
  }
  handle_submit = () => {
    let user = {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    }
    request
      .post('http://apps.telapexinc.com/corp_jwt/api/Authentication')
      .set('Accept', 'application/json')
      .send(user)
      .end(function(err,res){
        if(res.body === 'Error / User not authenticated'){
        }
        else{
          cookie.set('token', res.body);
          cookie.expiresMultiplier = 60 * 10;
          browserHistory.push('/finance/home/');
        }
      });
  }

  handle_username = (e) => {
    this.setState( { username: e.target.value } );
  }
  handle_password = (e) => {
    this.setState( { password: e.target.value } );
  }
  enter_key = (e) => {
    if(e.charCode === 13){
      this.handle_submit();
    }
  }
  render() {
    return (
      <div className='content' >
        <Paper className='content' zDepth={2}>
        <h2>Login Page</h2>
        <TextField
          ref="username"
          hintText='corp Credentials'
          floatingLabelText='Username' />

        <TextField
          ref="password"
          hintText='corp Credentials'
          floatingLabelText='Password'
          type='password' />

        <br />
        <br />
        <RaisedButton style={{float: 'right'}} labelStyle={{textTransform: 'none'}} label='Submit' primary={true} onTouchTap={this.handle_submit} />
        <div style={{clear: 'both'}} />
        </Paper>
      </div>
    );
  }
}

AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
}
export default AppComponent;
