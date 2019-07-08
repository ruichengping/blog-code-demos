import React from 'react';
import {createRouter} from '@/router';
class App extends React.PureComponent{
  render(){
    return createRouter('client')()
  }
};
export default App;