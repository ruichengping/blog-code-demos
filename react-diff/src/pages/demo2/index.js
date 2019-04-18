import React from 'react';
import {Card} from 'antd';
import Filter from './components/filter';
import Teacher from './components/teacher';
export default class Demo2 extends React.PureComponent{
  state={
    filters:{
      name:undefined,
      height:undefined,
      age:undefined
    },
    tableKey:this.createTableKey()
  }
  createTableKey(){
    return Math.random().toString(36).substring(7);
  }
  handleFilterChange=(filters)=>{
    this.setState({
      filters,
      //重新生成tableKey
      tableKey:this.createTableKey()
    });
  }
  render(){
    const {filters,tableKey} = this.state;
    return <Card>
      {/* 过滤器 */}
      <Filter onChange={this.handleFilterChange}/> 
      {/* 查询列表 */}
      <Teacher key={tableKey} filters={filters}/>
    </Card>
  }
}