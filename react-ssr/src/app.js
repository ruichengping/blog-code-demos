import React from 'react';
import {createBrowserHistory} from 'history';
import {Router,StaticRouter,Route} from 'react-router';
import routes from '@/routes';

const history = createBrowserHistory();
class App extends React.PureComponent{
  render(){
    return (<Router history={history}>{routes}</Router>)
  }
};
export default App;