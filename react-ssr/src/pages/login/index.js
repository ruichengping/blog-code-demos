import React from 'react';
export default class Login extends React.PureComponent{
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    return <div onClick={this.handleClick}>登陆</div>
  }
}