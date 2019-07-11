import React from 'react';
import {Provider} from 'react-redux';
import {createRouter} from '@/router';
import getStore from '@/store';
const store = getStore(window.INITIAL_STATE);
class App extends React.PureComponent{
  render(){
    return  <Provider store={store}>{createRouter('client')()}</Provider>
  }
};
export default App;