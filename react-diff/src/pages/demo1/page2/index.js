import React from 'react';
import {connect} from 'react-redux';
// let oldAuthType = '';//用来存储旧的用户身份
@connect(
  state=>state.user
)
class Page2 extends React.PureComponent{
  state={
    loading:true
  }
  loadMainData(){
    //这里采用了定时器去模拟数据请求
    this.setState({
      loading:true
    });
    const timer = setTimeout(()=>{
      this.setState({
        loading:false
      });
      clearTimeout(timer);
    },2000);
  }
  // componentDidUpdate(){
  //   const {authType} = this.props;
  //   if(authType!==oldAuthType){
  //     oldAuthType=authType;
  //     this.loadMainData();
  //   }
  // }
  componentDidMount(){
    // oldAuthType=this.props.authType;
    this.loadMainData();
  }
  render(){
    const {loading} = this.state;
    return (
      <h2>{`页面2${loading?'加载中...':'加载完成'}`}</h2>
    )
  }
}
export default Page2;