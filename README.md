实际工作中用到的一些工具函数，整理成一个工具包，便于后期直接使用和升级迭代，如有错误还请多多指教……

[![npm](https://img.shields.io/npm/v/fn_tools)](https://www.npmjs.com/package/fn_tools)    [![NPM](https://img.shields.io/npm/l/fn_tools)](https://www.npmjs.com/package/fn_tools)    [![APM](https://img.shields.io/apm/dm/fn_tools)](https://www.npmjs.com/package/fn_tools)

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

#### numberFormat

主要应用对数值进行格式化，包括保留有效数值位数，以及涉及金额增加千分符

参数          | 类型           | 默认值 | 备注
---           | ---            | ---    | ---
number        | Number  String |        | 
decimal_place | String         | 2      | 有效数位，若想要整数，直接传入0
thousand_mark | String         | ,      | 千分符号，若传入为数值，做空处理
math_type     | String         | round  | Math类型，round, ceil, floor  decimals_place > 0才生效
error_msg     | String         | --     | 数值不存在时的错误信息

### 阿拉伯数字转换 (金额)

#### numberTransform

主要应用与金额模块，需要对金额进行大写的情况

参数   | 类型           | 默认值 | 备注
---    | ---            | ---    | ---
number | Number  String |        |
type   | String         | upper  | 文本类型, lower (如：一 二 三), upper(壹, 贰, 叁)

### 日期格式化

#### dateFormat

主要应用对日期格式化，返回需要的类型

参数      | 类型    | 默认值 | 备注
---       | ---     | ---      | ---
timestamp | Number  |          | 必须为日期时间戳
type      | String  | YY-MM-DD | 返回格式, YY(年) YY-MM(年月) YY-MM-DD(年月日) YY-MM-DD-HMS(年月日时分秒) MM-DD(月日) HMS(时分秒) HM(时分) MS(分秒)
mark      | String  | -        | 连接符号

### 日期差

#### dateCompare

主要应用两个日期比较，计算两个日期的差额

参数       | 类型    | 默认值 | 备注
---        | ---     | ---      | ---
startDate  | Number  |          | 开始日期，必时间戳
endDate    | Number  |          | 结束日期，必时间戳
deviceDate | Number  |          | 设备日期（本地日期），必时间戳
