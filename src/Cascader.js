import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
import classnames from 'classnames';

const propTypes = {
	placeholder:PropTypes.string,
	options:PropTypes.any,
	onClick:PropTypes.func
};
const defaultProps = {
	placeholder:'请输入信息',
	options:null
};
let tem = [];//用于临时存储点击的节点
let textStr=[];//存储选择的节点
let parentVal ;//存储parent的value
let listArr = [];
let restoreClick;//记录点击的名字
class Cascader extends Component {
	constructor(props) {
		super(props);
		let options = this.props.options;
		for (let i = options.length - 1; i >= 0; i--) {
			options[i]['parent'] = true
		}
		this.state = {
			option : options,
			origin:null,//用于存储点击的第一级节点
			ulArr:null,
			textStr:[],
			showClose:false //是否显示清空按钮
		}
		this.formatData = this.formatData.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.focusHandler = this.focusHandler.bind(this);
		this.clear = this.clear.bind(this);
		this.uniqueID = this.uniqueID.bind(this);
		this.resetValue = this.resetValue.bind(this);
	}
	uniqueID() {
	    function s4(){
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	            s4() + '-' + s4() + s4() + s4();
	}
	formatData(data = this.state.option){
		let option = data;
		let liArr = [],
			ulArr = [];
		for (let i = option.length - 1; i >= 0; i--) {
			if('children' in option[i]){
				liArr.push( <li data-parent = {option[i]['parent']} 
								onClick = {this.clickHandler} 
								key={this.uniqueID()} 
								data-id = {i}
							>
								<span className="cascader-list-item">{option[i]['value']}</span>
								<i className="uf uf-arrow-right"></i>
								{/* <span className="cascader-select-arrow"><i className="uf uf-arrow-right"></i></span> */}
							</li>)
			}else{
				liArr.push( <li data-parent = {option[i]['parent']} 
								onClick = {this.clickHandler} 
								key={this.uniqueID()} 
								data-id = {i}
							>
								<span>{option[i]['value']}</span>
							</li>)
			}
		}
		let ulStr = (
			<ul key={this.uniqueID()}>
				{liArr}
			</ul>
		);
		listArr.push(ulStr);
		this.setState({
			ulArr : listArr
		});
	}
	focusHandler(e){
		e.stopPropagation();
		e.preventDefault();
		textStr = [];

		if(this.state.ulArr){
			let firstUl = this.state.ulArr[0];
			listArr = [];
			listArr.push(firstUl)
			this.setState({
				ulArr : listArr
			});
		}
		tem = [];
		listArr = [];
		this.setState({
			textStr:textStr
		})
		if(!this.state.ulArr){
			this.formatData();
		}
	}
	clickHandler(e){
		e.stopPropagation();
		e.preventDefault();
		// e.currentTarget.classList.add("active");
		let i = e.currentTarget.dataset.id;
		if(!parentVal)parentVal = this.state.option[i].value;
		let data = (tem[i])||(this.state.option[i].parent&&this.state.option[i]);
		if(e.currentTarget.dataset.parent){
			parentVal = e.currentTarget.innerText;
			let urlArr = this.state.ulArr[0];
			data = this.state.option[i];
			textStr = [];
			tem = [];
			listArr = [];
			listArr.push(urlArr)
			this.setState({
				ulArr : listArr
			});
		}
		if(restoreClick!=e.currentTarget.innerText){
			restoreClick = e.currentTarget.innerText;
			textStr.push(data.value);
			this.setState({
				textStr:textStr
			})
			if(data.children){
				tem = data.children;
				this.formatData(data.children);
			}else{
				this.clear();
			}
		}
		if(this.props.onClick){
			this.props.onClick(textStr);
		}
	}
	onMouseLeave=(e)=>{
		this.setState({
		  showClose:false
		})
	}

	onMouseEnter=(e)=>{
		this.setState({
			showClose:true
		})
	}

	clear(){
		tem = [];
		listArr = [];
		restoreClick = undefined;
		this.setState({
			ulArr:null
		})
	}
	/**
	 * 清空已选的值
	 */
	resetValue(){
		restoreClick = undefined;
		this.setState({
			textStr: []
		})
	}
	componentWillReceiveProps(nextProps){
		if('options' in nextProps){
			let options = nextProps.options;
			for (let i = options.length - 1; i >= 0; i--) {
				options[i]['parent'] = true
			}
			this.setState({
				option:options,
				textStr:[]
			})
			if(this.props.onClick){
				this.props.onClick([]);
			}
		}
	}
	render(){
		let va = this.state.textStr.join('/');
		let { ulArr, showClose } = this.state;
		let iconClass = !ulArr ? "uf-treearrow-down": "uf-gridcaretarrowup";
		return(
			<div className={classnames("cascader-container",this.props.className)}>
				<div className="cascader-header">
					<InputGroup simple className="cascader-input-group" 
						onMouseEnter={this.onMouseEnter}
						onMouseLeave={this.onMouseLeave}
					>
						<FormControl
							placeholder = {this.props.placeholder}
							value={va}
							onFocus={(v,e)=>{this.focusHandler(e)}}
							type="text"
						/>
						{
							va && showClose?(
							<InputGroup.Button shape="border" 
								onClick={this.resetValue}>
								<i className="uf uf-close-c"></i>
							</InputGroup.Button>
							):<InputGroup.Button shape="border" 
								onClick={(e)=>{props.keyboardInput?this.iconClick(e):''}}>
								<i className={`uf ${iconClass}`}></i>
							</InputGroup.Button>
						}
					</InputGroup>
				</div>
				<div className="cascader-content" >
					{ulArr}
				</div>
			</div>
		)
	}
};
Cascader.propTypes = propTypes;
Cascader.defaultProps = defaultProps;
export default Cascader;
