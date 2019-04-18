import React from 'react';
import PropTypes from 'prop-types';
import {Form,Input,Button} from 'antd';

 class Filter extends React.PureComponent{
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }
  handleFormSubmit=(e)=>{
    e.preventDefault();
    const {onChange,form} = this.props;
    onChange(form.getFieldsValue());
  }
  render(){
    const { getFieldDecorator,} = this.props.form;
    return  <Form layout="inline" onSubmit={this.handleFormSubmit}>
    <Form.Item label="姓名">
      {
        getFieldDecorator('name')(<Input placeholder="请输入"/>)
      }
    </Form.Item>
    <Form.Item label="身高">
      {
        getFieldDecorator('height')(<Input placeholder="请输入" addonAfter="cm"/>)
      }
    </Form.Item>
    <Form.Item label="年龄">
      {
        getFieldDecorator('age')(<Input placeholder="请输入" addonAfter="岁"/>)
      }
    </Form.Item>
    <Form.Item><Button type="primary" htmlType="submit" icon="search"></Button></Form.Item>
  </Form>
  }
} 

export default Form.create()(Filter);