require('normalize.css');
require('styles/App.css');

import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Styles from '../styles/GlobalStyles';

import SupportLinks from './SupportLinks';
import IntranetSites from './IntranetSites';
import ReferenceDocuments from './ReferenceDocuments';

/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


class AppComponent extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) };
  }

  render() {
    return (
      <div style={this.props.style}>
          <ReferenceDocuments innerStyle={this.props.innerStyle} />
          <SupportLinks style={Styles.InnerComponent} innerStyle={Styles.InnerLeft} />
          <IntranetSites style={Styles.InnerComponent} innerStyle={Styles.InnerLeft} />
      </div>
    );
  }
}
AppComponent.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
