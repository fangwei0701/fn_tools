import { strToArr } from "./common";
import { math_type } from "./constConfig";
/**
 * 千分符 
 * @param {Number} num  整数数值
 * @param {String} mark 千分符号
 */
export function thousandsMark(num, mark) {
    if (!mark) { return num }

    const REG = /(-?\d+)(\d{3})/;
    while (REG.test(num)) {
        num = num.replace(REG, "$1" + mark + "$2");
    }
    return num;
}
/**
 * 有效数值位数
 * @param {String} type 数值处理类型
 * @param {String} num 
 * @param {String} dec  有效数值位数
 */
export function newToFixed(type, num, dec) {
    let _num = "";

    if (!math_type.includes(type) || !dec) {
        const [b = '0', a = '0'] = strToArr(num, '.');
        const _a = dec ? a.substring(0, dec) : a;
        _num = Number(`${b}.${_a}`);
    } else {
        const pow_num = Math.pow(10, dec);
        _num = Math[type](num * pow_num) / pow_num;
    }
    return "" + _num;
}
/**
 * 数值填充 不足有效数值位数的自动补充0
 * @param {String} num  小数部分数值
 * @param {String} dec  有效数值位数
 */
export function decimalFill(num, dec) {
    if (!dec) { return num }

    const len = num.length;
    if (len < dec) {
        num += new Array(dec - len + 1).join("0");
    }
    return num;
}
/**
 * 四位分级
 * @param {Number} num 
 * @param {Object} config
 */
export function arabicFourLevel(number, config) {
    const { num, unit } = config || {};
    let _p;
    const levels = number.reverse().reduce((p, v, i) => {
        _p = p[0] || [];
        let _l = _p && _p.length < 4 ? _p : [];
        let _v = (v === "0" ? num[v] : num[v] + unit[i % 4]);

        _l.unshift(_v);
        _l.length === 1 ? p.unshift(_l) : _p = _l;

        return p;
    }, []);

    return levels;
}
/**
 * 整数部分
 * @param {Array}   levels 
 * @param {Object}  config 
 */
export function arabicInteger(levels, config) {
    const integer = levels.reduce((p, v, i) => {
        let _l = config.level[levels.length - i - 1];
        // 连续多个零字进行去重
        let _v = v.join("").replace(/(零)\1+/g, "$1");
        let len = _v.length;
        // 这一级只有一个零，则去掉这级
        if (_v === "零") {
            _v = "";
            _l = "";
        }
        // 末尾为零字，去掉这个零字
        else if (_v[len - 1] === "零") {
            _v = _v.slice(0, len - 1);
        }
        return p + _v + _l;
    }, "");

    return integer;
}
/**
 * 小数部分
 * @param {Array}   number 
 * @param {Object}  config 
 * @param {Object}  decimalConfig 
 */
export function arabicDecimal(number, config, decimalConfig) {
    const decimal = number.map((v, i) => {
        const { unit } = decimalConfig;
        const _unit = (v !== "0" ? unit[unit.length - i - 1] : "");

        return `${config.num[v]}${_unit}`;
    }).join("");

    return decimal;
}