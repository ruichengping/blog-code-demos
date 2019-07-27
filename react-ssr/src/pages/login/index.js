import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import style from './style.css';
import withStyles from 'isomorphic-style-loader/withStyles';

class Login extends React.PureComponent{
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    return <div className={style['wrapper-bg']}>
      <Helmet>
          <title>登陆页</title>
          <meta name="keywords" content="login" />
          <meta name="description" content="这是登陆页" />
      </Helmet>
      <div onClick={this.handleClick}>
        这是登陆页
      </div>
      <Link to="/user">用户页</Link>
    </div>
  }
}

export default withStyles(style)(Login)