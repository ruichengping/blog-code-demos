import React from 'react';
import {Link} from 'react-router-dom';
export default class Login extends React.PureComponent{
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    return <div>
      <div onClick={this.handleClick}>
        这是登陆页
      </div>
      <Link to="/user">用户页</Link>
    </div>
  }
}