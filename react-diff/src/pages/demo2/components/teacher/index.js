import React from 'react';
import moment from 'moment';
import { Table } from 'antd';
import {keys,isNumber,isString,isEmpty} from 'lodash';

const currentYear = moment().format('YYYY');
const allTeachers = [{
  name:'苍井空',
  height:155,
  age:currentYear*1-1983
},{
  name:'松岛枫',
  height:160,
  age:currentYear*1-1982
},{
  name:'立花瑠莉',
  height:168,
  age:currentYear*1-1992
},{
  name:'朝桐光',
  height:164,
  age:currentYear*1-1982
},{
  name:'麻生希',
  height:170,
  age:currentYear*1-1988
},{
  name:'麻仓优',
  height:160,
  age:currentYear*1-1989
}];
export default class Teacher extends React.PureComponent{
  state={
    teachers:[],
    tableLoading:true
  }
  filterTeachers(teachers){
    const {filters} = this.props;
    const finalFilters = {};
    keys(filters).filter(key=>!!filters[key]).forEach((key)=>{
      finalFilters[key]=filters[key];
    });
    return teachers.filter((teacher)=>isEmpty(finalFilters)||keys(finalFilters).every((key)=>{
      const filterItem = finalFilters[key];
      if(key==='name'){
        return teacher[key].indexOf(filterItem)>-1;
      }else if(['height','age'].indexOf(key)>-1){
        return teacher[key]===filterItem*1;
      }else{
        return teacher[key]===filterItem;
      } 
    }));
  }
  loadMainData(){
    this.setState({
      tableLoading:true
    });
    const timer = setTimeout(()=>{
      this.setState({
        teachers:this.filterTeachers(allTeachers),
        tableLoading:false
      })
      clearTimeout(timer);
    },2000)
  }
  componentDidMount(){
    this.loadMainData();
  }
  render(){
    const {teachers,tableLoading} = this.state;
    const columns = [{
      title:'序号',
      key:'index',
      render:(value,row,index)=>index+1
    },{
      title:'姓名',
      key:'name',
      dataIndex:'name'
    },{
      title:'身高（cm）',
      key:'height',
      dataIndex:'height'
    },{
      title:'年龄',
      key:'age',
      dataIndex:'age'
    }]
    return <Table style={{marginTop:20}} columns={columns} loading={tableLoading} dataSource={teachers} pagination={false}/>
  }
}