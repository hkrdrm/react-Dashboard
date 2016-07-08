import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './components/Main';
import Home from './components/Home';

// Render the main component into the dom
ReactDOM.render(
   <Router history={browserHistory}>
     <Route path='/' component={App}>
       <IndexRoute component={Home} />

     </Route>
   </Router>,
   document.getElementById('app')
);

/* -- Unused Routes
  ------------------
	<Route path='/finance/home' component={Home} />

  ------------------
*/
