实际工作中用到的一些工具函数，整理成一个工具包，便于后期直接使用和升级迭代，如有错误还请多多指教……

[![npm](https://img.shields.io/npm/v/fn_tools)](https://www.npmjs.com/package/fn_tools)


##### 安装
```
yarn add fn_tools -s

or

npm install fn_tools -s
```


##### 使用
```
improt { fn_tools_name1, fn_tools_name2, …… } from 'fn_tools';
```


### 数值格式化(金额 | 数值)

#### numberFormate

主要应用对数值进行格式化，包括保留有效数值位数，以及涉及金额增加千分符

参数          | 类型           | 默认值 | 备注
---           | ---            | ---    | ---
number        | Number  String |        | 
decimal_place | String         | 2      | 有效数位，若想要整数，直接传入0
thousand_mark | String         | ,      | 千分符号，若传入为数值，做空处理
math_type     | String         | round  | Math类型，round, ceil, floor  设置decimals_place才生效
error_msg     | String         | --     | 数值不存在时的错误信息


### 阿拉伯数字转换 (金额)

#### numberTransform

主要应用与金额模块，需要对金额进行大写的情况

参数   | 类型           | 默认值 | 备注
---    | ---            | ---    | ---
number | Number  String |        |
type   | String         | upper  | 文本类型, lower (如：一 二 三), upper(壹, 贰, 叁)

