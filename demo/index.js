
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Cascader from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\n *\n * @title 基础级联菜单\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport Cascader from 'bee-cascader';\n\n const options = [\n \t{\n \t  value: '浙江',\n \t  children: [\n \t\t  {\n \t\t    value: '杭州',\n \t\t    children: [\n \t\t\t    {\n \t\t\t      value: '西湖',\n \t\t\t      children: [\n \t\t\t\t    {\n \t\t\t\t      value: '白娘子'\n \t\t\t\t    },\n \t\t\t\t    {\n \t\t\t\t      value: '许仙'\n \t\t\t\t    }]\n \t\t\t    }]\n \t\t  }\n \t  ]\n \t},\n \t{\n \t  value: '江苏',\n \t  children: [\n \t\t  {\n \t\t    value: '南京',\n \t\t    children: [\n \t\t\t    {\n \t\t\t      value: '中华门'\n \t\t\t    }]\n \t\t  }\n \t  ]\n \t},\n \t{\n \t  value: '山东'\n \t}\n ];\n class Demo1 extends Component {\n \trender(){\n \t\treturn(\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                     \t<Cascader options = {options} />\n                    </div>\n                </Col>\n            </Row>\n \t\t)\n \t}\n }\n","desc":""}]


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
