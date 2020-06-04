实际工作中用到的一些工具函数，整理成一个工具包，便于后期直接使用和升级迭代，如有错误还请多多指教……

[![npm](https://img.shields.io/npm/v/fn_tools)](https://www.npmjs.com/package/fn_tools)


### 数值格式化(金额 | 数值)

#### numberFormate

参数          | 类型           | 默认值 | 备注
---           | ---            | ---    | ---
number        | Number  String |        | 
decimal_place | String         | 2      |
thousand_mark | String         | ,      |
math_type     | String         | round  | round, ceil, floor  设置decimals_place才生效
decimal_mark  | String         | .      |
error_msg     | String         | --     |


### 阿拉伯数字转换 (金额)

#### numberTransform

参数   | 类型           | 默认值 | 备注
---    | ---            | ---    | ---
number | Number  String |        |
type   | String         | upper  |

