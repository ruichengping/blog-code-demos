import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from './redux/actions';
@connect(
  state=>state.user,
  dispatch=>bindActionCreators(actions,dispatch)
)
class User extends React.PureComponent{
  static loadData=(store)=>{
    return  axios.get('http://localhost:3000/api/a/users').then((response)=>{
      const {data} = response;
      const {changeUsers} = bindActionCreators(actions,store.dispatch);
      changeUsers(data);
    });
  }
  handleClick=(e)=>{
    alert(e.target.innerHTML)
  }
  render(){
    const {users} = this.props;
    return <div>
      {/* <div onClick={this.handleClick}>
        这是用户页
      </div>
      <Link to="/login">登陆页</Link> */}
     <table>
       <thead>
          <tr>
            <th>姓名</th>
            <th>身高</th>
            <th>生日</th>
          </tr>
       </thead>
       <tbody>
         {
            users.map((user)=>{
              const {name,birthday,height} = user;
              return <tr key={name}>
                <td>{name}</td>
                <td>{birthday}</td>
                <td>{height}</td>
              </tr>
            })
         }
       </tbody>
     </table>
    </div>
  }
}

export default User;