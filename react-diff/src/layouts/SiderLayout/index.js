import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BasicLayout from '../BasicLayout';
import {Menu,Icon} from 'antd'
import './style.scss';
const SubMenu = Menu.SubMenu;
const navMenuList = [{
  title:'页面1',
  path:'/demo1/page1'
},{
  title:'页面2',
  path:'/demo1/page2'
}
];
@connect(
  state=>state.user
)
class SiderLayout extends React.PureComponent{
  renderNavMenuList(navMenuList){
    return navMenuList.map((navMenu)=>{
      const {children,title,icon,path} = navMenu;
      if(children){
        return <SubMenu key={title} title={<span>{icon&&<Icon type={icon} />}<span> {title}</span></span>}>{this.renderNavMenuList(children)}</SubMenu>
      }else{
      return <Menu.Item key={path}><Link to={path}>{icon&&<Icon type={icon} />} {title}</Link></Menu.Item>
      }
    })
  } 
  getOpenKeyAndSelectedKey(navMenuList,matchedPath){
    const openKeys=[],selectedKeys=[];
    Array.isArray(navMenuList)&&navMenuList.forEach((navMenu)=>{
      const {title,path,children} = navMenu;
      if(children){
        const matchedChild=children.find((child)=>child.path===matchedPath)
        if(matchedChild){
          openKeys.push(title);
          selectedKeys.push(matchedChild.path);
        }
      }else if(path===matchedPath){
        selectedKeys.push(path);
      }
    });
    return {
      openKeys,
      selectedKeys
    }
  }
  render(){
    const {children,location,authType} = this.props;
    const {pathname} = location;
    const {openKeys,selectedKeys} = this.getOpenKeyAndSelectedKey(navMenuList,pathname);
    return (
      <BasicLayout className="g-navtwo">
        <div className="g-slider">
          <Menu 
            className="m-menu"
            mode="inline"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
          >
            {
              this.renderNavMenuList(navMenuList)
            }
          </Menu>
        </div>
        <div className="g-main" key={authType}>{children}</div>
      </BasicLayout>
    )
  }
}
export default SiderLayout;