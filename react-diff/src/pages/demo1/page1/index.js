import React from 'react';

class Page1 extends React.PureComponent{
  state={
    loading:true
  }
  loadMainData(){
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
  componentDidMount(){
    this.loadMainData();
  }
  render(){
    const {loading} = this.state;
    return (
      <h2>{`页面1${loading?'加载中...':'加载完成'}`}</h2>
    )
  }
}
export default Page1;