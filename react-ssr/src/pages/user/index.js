import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.PureComponent{
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    return <div>
      <div onClick={this.handleClick}>
        这是用户页
      </div>
      <Link to="/login">登陆页</Link>
    </div>
  }
}