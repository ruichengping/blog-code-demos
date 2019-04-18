import React from 'react';
import {Layout,Menu,Popover,Avatar} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router';
import * as globalActions from '../../store/actions';
const { Header, Content} = Layout;
import './style.scss';
@connect(
  state=>({user:state.user}),
  dispatch=>bindActionCreators(globalActions,dispatch)
)
class BasicLayout extends React.PureComponent{
  state={
    topMenuList:[{
      key:'/demo1',
      name:'demo1',
      jumpPath:'/demo1'
    },{
      key:'/demo2',
      name:'demo2',
      jumpPath:'/demo2'
    },{
      key:'/demo3',
      name:'demo3',
      jumpPath:'/demo3/1'
    }],
    authTypeList:[{
      label:'游客',
      value:'visitor'
    },{
      label:'管理员',
      value:'manager'
    },{
      label:'超级管理员',
      value:'super-manager'
    }]
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    match:PropTypes.object.isRequired
  }
   //响应导航栏跳转
  handleMenuClick=({key})=>{
    const {topMenuList} = this.state;
    const {history} = this.props;
    const selectedTopMenu = topMenuList.find((menu)=>menu.key===key);
    selectedTopMenu&&history.push(selectedTopMenu.jumpPath);
  }
  //响应身份切换
  changeAuthType=(authType)=>{
    const {changeAuthType} = this.props;
    changeAuthType(authType);
  }
  render(){
    const {topMenuList,authTypeList,loading} = this.state;
    const {user,children,className,match} = this.props;
    const {authType} = user;
    const currentAuth = authTypeList.find((item)=>item.value===authType);
    const content=(
      <ul className="m-user-operation-list">
        {
          authTypeList.map((item)=>  <li className={classnames('operation-item',{active:item.value===authType})} key={item.value} onClick={this.changeAuthType.bind(this,item.value)}>{item.label}</li>)
        }
      </ul>
    )
    const menuSelectedKeys = topMenuList.filter((menu)=>match.path.indexOf(menu.key)>-1).map((menu)=>menu.key); 
    return (
      <Layout className="g-container">
        <Header className="g-header">
            <div className="m-left"><span className="u-title">样本系统</span></div>
            <div className="m-middle">
              <Menu
                className="m-slider"
                theme="dark"
                mode="horizontal"
                selectedKeys={menuSelectedKeys}
                onClick={this.handleMenuClick}
              >
                {
                  topMenuList.map((topMenu)=> <Menu.Item key={topMenu.key}>{topMenu.name}</Menu.Item>)
                }
              </Menu>
            </div>
            <div className="m-right text-right">
              <Popover placement="bottom" content={content}>
                <Avatar icon="user" />
                <span className="u-user-name ml-10">{currentAuth&&currentAuth.label}</span>
              </Popover>
            </div>
        </Header>
        <Content className={classnames('g-body',className)}>{children}</Content>
      </Layout>
    )
  }
}
export default withRouter(BasicLayout) ;