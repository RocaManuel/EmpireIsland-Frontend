// - Basics -
import React from 'react';
// - Material UI -
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from '../theme';
// - Redux - 
import { Switch, BrowserRouter, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as createHistory from 'history';
import createStore from '../Store/index';
// - Custom Route -
import SecureRoute from '../Route/Components/Secure_Route';
// - Views -
import Home from '../Views/Home';
import LogIn from '../Views/LogIn';
import RenderNavBar from '../Components/NavBar';


function App() {
  const history = createHistory.createHashHistory();
  const store = createStore(history);
  return (
    <BrowserRouter>
      <Provider store={store}>
          <MuiThemeProvider theme={MyTheme}>
              <Router history={history}>
                  <RenderNavBar />
                  <Switch>
                    <SecureRoute exact path='/home' component={Home} />
                    <Route exact path="/" component={LogIn} />
                    <Route render={ () => <h1>404 Error</h1> } />
                  </Switch>
              </Router>
          </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
