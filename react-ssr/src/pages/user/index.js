import React from 'react';

export default class Index extends React.PureComponent{
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    return <div onClick={this.handleClick}>用户</div>
  }
}