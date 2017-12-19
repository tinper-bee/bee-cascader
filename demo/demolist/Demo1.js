/**
 *
 * @title 基础级联菜单
 * @description
 *
 */

import React, { Component } from 'react';
import {Row, Col } from 'bee-layout';
import Cascader from '../../src';

 const options = [
 	{
 	  value: '浙江',
 	  children: [
 		  {
 		    value: '杭州',
 		    children: [
 			    {
 			      value: '西湖',
 			      children: [
 				    {
 				      value: '白娘子'
 				    },
 				    {
 				      value: '许仙'
 				    }]
 			    }]
 		  }
 	  ]
 	},
 	{
 	  value: '江苏',
 	  children: [
 		  {
 		    value: '南京',
 		    children: [
 			    {
 			      value: '中华门'
 			    }]
 		  }
 	  ]
 	},
 	{
 	  value: '山东'
 	}
 ];
 class Demo1 extends Component {
 	render(){
 		return(
            <Row>
                <Col md={4}>
                    <div className="height-150">
                     	<Cascader options = {options} />
                    </div>
                </Col>
            </Row>
 		)
 	}
 }
export default Demo1;