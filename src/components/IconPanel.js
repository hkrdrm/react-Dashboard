require('normalize.css');
require('styles/App.css');
require('styles/animate.css');
require('styles/hover-min.css');

import React from 'react';
import Paper from 'material-ui/Paper';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

let OracleImage      = require('../images/oracle.png');
let BusinessObjects  = require('../images/business_objects_trans.png');
let ContentCentral   = require('../images/content_central.png');
let PeopleSoft       = require('../images/peoplesoft.png');
let WebMail          = require('../images/webmail.png');
let TelapexDashboard = require('../images/telapex_dashboard.png');
let TelaTask         = require('../images/telatask.png');

class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <Paper style={{textAlign: 'center', backgroundColor: '#ffffff', margin: '20 auto', marginBottom: 20, padding: 20}} zDepth={2} >
        <div style={{display: 'inline-block', margin: '0 auto'}}>
          <Icon src ={OracleImage} url='https://prodebs.corp.wan/' />
          <Icon src ={BusinessObjects} url='http://tpibo.mg.telapexinc.com/BOE/BI/' />
          <Icon src ={ContentCentral} url='http://192.168.160.117/ContentCentral/Login.aspx?bypassMobile=1' />
          <Icon src ={PeopleSoft} url='https://hr.cel.mycmsc.com/psp/celhrprdtpx/?cmd=login' />
          <Icon src ={WebMail} url='https://mail.cspire.com' />
          <Icon src ={TelapexDashboard} url='http://tpiapp1/Telapex/Login' />
          <Icon src ={TelaTask} url='http://tpisql/TelaTask' />
        </div>
        <div style={{clear: 'both'}} />
      </Paper>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;

class Icon extends React.Component {

  click = () => {

  }
  render() {
    return (
      <a href={this.props.url} target='_blank'>
      <Paper onTouchTap={this.click} className='button hvr-grow' style={{float: 'left', position: 'relative', width: 100, height: 100, marginRight: 20, borderRadius: 30}} zDepth={2}>
        <img style={{position: 'relative', float: 'left', width: 100, height: 100}} src={this.props.src} />
      </Paper>
      </a>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};
/*
          <Icon src ={OracleStellent} />
*/