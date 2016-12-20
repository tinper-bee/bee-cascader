
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Cascader from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 基础级联菜单
 * @description
 *
 */

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
var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\r\n *\r\n * @title 基础级联菜单\r\n * @description\r\n *\r\n */\r\n\r\n const options = [\r\n \t{\r\n \t  value: '浙江',\r\n \t  children: [\r\n \t\t  {\r\n \t\t    value: '杭州',\r\n \t\t    children: [\r\n \t\t\t    {\r\n \t\t\t      value: '西湖',\r\n \t\t\t      children: [\r\n \t\t\t\t    {\r\n \t\t\t\t      value: '白娘子'\r\n \t\t\t\t    },\r\n \t\t\t\t    {\r\n \t\t\t\t      value: '许仙'\r\n \t\t\t\t    }]\r\n \t\t\t    }]\r\n \t\t  }\r\n \t  ]\r\n \t},\r\n \t{\r\n \t  value: '江苏',\r\n \t  children: [\r\n \t\t  {\r\n \t\t    value: '南京',\r\n \t\t    children: [\r\n \t\t\t    {\r\n \t\t\t      value: '中华门'\r\n \t\t\t    }]\r\n \t\t  }\r\n \t  ]\r\n \t},\r\n \t{\r\n \t  value: '山东'\r\n \t}\r\n ];\r\n class Demo1 extends Component {\r\n \trender(){\r\n \t\treturn(\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150\">\r\n                     \t<Cascader options = {options} />\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n \t\t)\r\n \t}\r\n }\r\n","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
