import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\n *\n * @title 基础级联菜单\n * @description 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n\tlabel: '基础组件',\n\tvalue: 'jczj',\n\tchildren: [{\n\t\tlabel: '导航',\n\t\tvalue: 'dh',\n\t\tchildren: [{\n\t\t\tlabel: '面包屑',\n\t\t\tvalue: 'mbx'\n\t\t},{\n\t\t\tlabel: '分页',\n\t\t\tvalue: 'fy'\n\t\t},{\n\t\t\tlabel: '标签',\n\t\t\tvalue: 'bq'\n\t\t},{\n\t\t\tlabel: '菜单',\n\t\t\tvalue: 'cd'\n\t\t}]\n\t},{\n\t\tlabel: '反馈',\n\t\tvalue: 'fk',\n\t\tchildren: [{\n\t\t\tlabel: '模态框',\n\t\t\tvalue: 'mtk'\n\t\t},{\n\t\t\tlabel: '通知',\n\t\t\tvalue: 'tz'\n\t\t}]\n \t},\n \t{\n\t\tlabel: '表单',\n \t    value: 'bd'\n \t}]\n\t},{\n\t\tlabel: '应用组件',\n\t\tvalue: 'yyzj',\n\t\tchildren: [{\n\t\t\tlabel: '参照',\n\t\t\tvalue: 'ref',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '树参照',\n\t\t\t\tvalue: 'reftree'\n\t\t\t},{\n\t\t\t\tlabel: '表参照',\n\t\t\t\tvalue: 'reftable'\n\t\t\t},{\n\t\t\t\tlabel: '穿梭参照',\n\t\t\t\tvalue: 'reftransfer'\n\t\t\t}]\n\t\t}]\n\t}\n];\nclass Demo1 extends Component {\n\n\tonChange = (value, selectedOptions) => {\n    \tconsole.log(value, selectedOptions);\n\t}\n\t\n \trender(){\n \t\treturn(\n\t\t\t<Row>\n\t\t\t\t<Col md={4}>\n\t\t\t\t\t<div className=\"height-150\">\n\t\t\t\t\t\t<Cascader \n\t\t\t\t\t\t\toptions = {options} \n\t\t\t\t\t\t\tonChange = {this.onChange}\n\t\t\t\t\t\t\tplaceholder = \"请选择\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</Col>\n\t\t\t</Row>\n \t\t)\n \t}\n}\n","desc":" 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。"},{"example":<Demo2 />,"title":" 默认值","code":"/**\n *\n * @title 默认值\n * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n\tlabel: '基础组件',\n\tvalue: 'jczj',\n\tchildren: [{\n\t\tlabel: '导航',\n\t\tvalue: 'dh',\n\t\tchildren: [{\n\t\t\tlabel: '面包屑',\n\t\t\tvalue: 'mbx'\n\t\t},{\n\t\t\tlabel: '分页',\n\t\t\tvalue: 'fy'\n\t\t},{\n\t\t\tlabel: '标签',\n\t\t\tvalue: 'bq'\n\t\t},{\n\t\t\tlabel: '菜单',\n\t\t\tvalue: 'cd'\n\t\t}]\n\t},{\n\t\tlabel: '反馈',\n\t\tvalue: 'fk',\n\t\tchildren: [{\n\t\t\tlabel: '模态框',\n\t\t\tvalue: 'mtk'\n\t\t},{\n\t\t\tlabel: '通知',\n\t\t\tvalue: 'tz'\n\t\t}]\n \t},\n \t{\n\t\tlabel: '表单',\n \t    value: 'bd'\n \t}]\n\t},{\n\t\tlabel: '应用组件',\n\t\tvalue: 'yyzj',\n\t\tchildren: [{\n\t\t\tlabel: '参照',\n\t\t\tvalue: 'ref',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '树参照',\n\t\t\t\tvalue: 'reftree'\n\t\t\t},{\n\t\t\t\tlabel: '表参照',\n\t\t\t\tvalue: 'reftable'\n\t\t\t},{\n\t\t\t\tlabel: '穿梭参照',\n\t\t\t\tvalue: 'reftransfer'\n\t\t\t}]\n\t\t}]\n\t}\n];\n\nconst defaultOptions = [{\n    label: '基础组件',\n    value: 'jczj',\n}, {\n    label: '导航',\n    value: 'dh',\n}, {\n    label: '菜单',\n    value: 'cd',\n}];\n\nclass Demo2 extends Component {\n\n\tonChange = (value, selectedOptions) => {\n        console.log(value, selectedOptions);\n\t}\n\t\n \trender(){\n \t\treturn(\n\t\t\t<Row>\n\t\t\t\t<Col md={4}>\n\t\t\t\t\t<div className=\"height-150\">\n                        <Cascader \n                            defaultValue={defaultOptions}\n\t\t\t\t\t\t\toptions = {options} \n\t\t\t\t\t\t\tonChange = {this.onChange}\n\t\t\t\t\t\t\tplaceholder = \"请选择\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</Col>\n\t\t\t</Row>\n \t\t)\n \t}\n}\n","desc":" 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。"},{"example":<Demo3 />,"title":" 移入展开","code":"/**\n *\n * @title 移入展开\n * @description 鼠标hover时展开菜单子选项\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n\tlabel: '基础组件',\n\tvalue: 'jczj',\n\tchildren: [{\n\t\tlabel: '导航',\n\t\tvalue: 'dh',\n\t\tchildren: [{\n\t\t\tlabel: '面包屑',\n\t\t\tvalue: 'mbx'\n\t\t},{\n\t\t\tlabel: '分页',\n\t\t\tvalue: 'fy'\n\t\t},{\n\t\t\tlabel: '标签',\n\t\t\tvalue: 'bq'\n\t\t},{\n\t\t\tlabel: '菜单',\n\t\t\tvalue: 'cd'\n\t\t}]\n\t},{\n\t\tlabel: '反馈',\n\t\tvalue: 'fk',\n\t\tchildren: [{\n\t\t\tlabel: '模态框',\n\t\t\tvalue: 'mtk'\n\t\t},{\n\t\t\tlabel: '通知',\n\t\t\tvalue: 'tz'\n\t\t}]\n \t},\n \t{\n\t\tlabel: '表单',\n \t    value: 'bd'\n \t}]\n\t},{\n\t\tlabel: '应用组件',\n\t\tvalue: 'yyzj',\n\t\tchildren: [{\n\t\t\tlabel: '参照',\n\t\t\tvalue: 'ref',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '树参照',\n\t\t\t\tvalue: 'reftree'\n\t\t\t},{\n\t\t\t\tlabel: '表参照',\n\t\t\t\tvalue: 'reftable'\n\t\t\t},{\n\t\t\t\tlabel: '穿梭参照',\n\t\t\t\tvalue: 'reftransfer'\n\t\t\t}]\n\t\t}]\n\t}\n];\n\nclass Demo3 extends Component {\n\n    onChange = (value) => {\n        console.log(value)\n    }\n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader expandTrigger=\"hover\" options={options} onChange={this.onChange} placeholder=\"请选择\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 鼠标hover时展开菜单子选项"},{"example":<Demo4 />,"title":" 禁用状态","code":"/**\n *\n * @title 禁用状态\n * @description 通过`disabled`参数设置是否禁用。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n    value: 'js',\n    children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n    value: 'sd'\n    }\n];\n\nclass Demo4 extends Component {  \n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader disabled options={options} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过`disabled`参数设置是否禁用。"},{"example":<Demo5 />,"title":" 选择即改变","code":"/**\n *\n * @title 选择即改变\n * @description 设置属性 `changeOnSelect` 点任何一级都可以选择。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n\tlabel: '基础组件',\n\tvalue: 'jczj',\n\tchildren: [{\n\t\tlabel: '导航',\n\t\tvalue: 'dh',\n\t\tchildren: [{\n\t\t\tlabel: '面包屑',\n\t\t\tvalue: 'mbx'\n\t\t},{\n\t\t\tlabel: '分页',\n\t\t\tvalue: 'fy'\n\t\t},{\n\t\t\tlabel: '标签',\n\t\t\tvalue: 'bq'\n\t\t},{\n\t\t\tlabel: '菜单',\n\t\t\tvalue: 'cd'\n\t\t}]\n\t},{\n\t\tlabel: '反馈',\n\t\tvalue: 'fk',\n\t\tchildren: [{\n\t\t\tlabel: '模态框',\n\t\t\tvalue: 'mtk'\n\t\t},{\n\t\t\tlabel: '通知',\n\t\t\tvalue: 'tz'\n\t\t}]\n \t},\n \t{\n\t\tlabel: '表单',\n \t    value: 'bd'\n \t}]\n\t},{\n\t\tlabel: '应用组件',\n\t\tvalue: 'yyzj',\n\t\tchildren: [{\n\t\t\tlabel: '参照',\n\t\t\tvalue: 'ref',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '树参照',\n\t\t\t\tvalue: 'reftree'\n\t\t\t},{\n\t\t\t\tlabel: '表参照',\n\t\t\t\tvalue: 'reftable'\n\t\t\t},{\n\t\t\t\tlabel: '穿梭参照',\n\t\t\t\tvalue: 'reftransfer'\n\t\t\t}]\n\t\t}]\n\t}\n];\n\nclass Demo5 extends Component {  \n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader changeOnSelect options={options} placeholder=\"请选择\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 设置属性 `changeOnSelect` 点任何一级都可以选择。"},{"example":<Demo6 />,"title":" 动态改变options","code":"/**\n *\n * @title 动态改变options\n * @description 通过动态设置`options`参数，即可灵活改变数据源。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\n\nconst baseOptions = [{\n    label: '基础组件',\n    value: 'jczj',\n    children: [{\n        label: '导航',\n        value: 'dh',\n        children: [{\n            label: '面包屑',\n            value: 'mbx'\n        },{\n            label: '分页',\n            value: 'fy'\n        },{\n            label: '标签',\n            value: 'bq'\n        },{\n            label: '菜单',\n            value: 'cd'\n        }]\n    },{\n        label: '反馈',\n        value: 'fk',\n        children: [{\n            label: '模态框',\n            value: 'mtk'\n        },{\n            label: '通知',\n            value: 'tz'\n        }]\n        },\n        {\n        label: '表单',\n            value: 'bd'\n        }]\n    },{\n        label: '应用组件',\n        value: 'yyzj',\n        children: [{\n            label: '参照',\n            value: 'ref',\n            children: [{\n                label: '树参照',\n                value: 'reftree'\n            },{\n                label: '表参照',\n                value: 'reftable'\n            },{\n                label: '穿梭参照',\n                value: 'reftransfer'\n            }]\n        }]\n    }\n];\n\nclass Demo6 extends Component {  \n    state = {\n        options: baseOptions\n    }\n    \n    changeOptions = () => {\n        this.setState({\n            options: [{\n                label: '北京',\n                value: 'bj',\n                children: [{\n                        label: '故宫',\n                        value: 'gg',\n                    },{\n                        label: '天坛',\n                        value: 'tt',\n                    },{\n                        label: '王府井',\n                        value: 'wfj',\n                    }]\n                },\n                {\n                    label: '江苏',\n                    value: 'js',\n                    children: [{\n                            label: '南京',\n                            value: 'nj',\n                            children: [{\n                                label: '中华门',\n                                value: 'zhm'\n                            }]\n                        }]\n                    },\n                    {\n                        label: '山东',\n                    value: 'sd'\n                }\n            ]\n        })\n    }\n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Button colors=\"primary\" onClick={this.changeOptions} style={{marginBottom:8+'px'}}>点击改变选项数组</Button>\n                        <Cascader options={this.state.options} placeholder=\"请选择\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过动态设置`options`参数，即可灵活改变数据源。"},{"example":<Demo7 />,"title":" 不同尺寸的Cascader","code":"/**\n *\n * @title 不同尺寸的Cascader\n * @description 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '基础组件',\n    value: 'jczj',\n    children: [{\n        label: '导航',\n        value: 'dh',\n        children: [{\n            label: '面包屑',\n            value: 'mbx'\n        },{\n            label: '分页',\n            value: 'fy'\n        },{\n            label: '标签',\n            value: 'bq'\n        },{\n            label: '菜单',\n            value: 'cd'\n        }]\n    },{\n        label: '反馈',\n        value: 'fk',\n        children: [{\n            label: '模态框',\n            value: 'mtk'\n        },{\n            label: '通知',\n            value: 'tz'\n        }]\n        },\n        {\n        label: '表单',\n            value: 'bd'\n        }]\n    },{\n        label: '应用组件',\n        value: 'yyzj',\n        children: [{\n            label: '参照',\n            value: 'ref',\n            children: [{\n                label: '树参照',\n                value: 'reftree'\n            },{\n                label: '表参照',\n                value: 'reftable'\n            },{\n                label: '穿梭参照',\n                value: 'reftransfer'\n            }]\n        }]\n    }\n];\n\nclass Demo7 extends Component {  \n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150 demo7\">\n                        <Cascader size=\"sm\" options={options} placeholder=\"请选择\"/>\n                        <Cascader options={options} placeholder=\"请选择\"/>\n                        <Cascader size=\"lg\" options={options} placeholder=\"请选择\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。","scss_code":".demo7{\n    span{\n        margin-bottom: 16px;\n    }\n    .u-form-control.lg{\n        width: 183px;\n    }\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
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
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
