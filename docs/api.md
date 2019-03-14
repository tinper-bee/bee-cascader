## Cascader

级联选择框。

## 代码演示

### API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|placeholder	|input提示信息|	string	|""|
|options	|下拉列表数据	|json|	必填，无默认值|
|defaultValue|默认的选中项|	string[]|[]|
|changeOnSelect|当此项为 true 时，点选每级菜单选项值都会发生变化|	boolean|false|
|disabled|禁用|	boolean|false|
|expandTrigger|次级菜单的展开方式，可选 'click' 和 'hover'|	string|'click'|
|size|输入框大小，可选 lg md sm|	string|'md'|
|onChange   |选择完成后的回调| Function(value, selectedOptions)|	-|
|onClick	|选中节点的钩子函数，返回array选中的节点| function |	-|