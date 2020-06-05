import { strToArr } from "../units/common";
import { arabic_numberals } from "../units/constConfig";
import {
    newToFixed,
    decimalFill,
    thousandsMark,
    arabicInteger,
    arabicDecimal,
    arabicFourLevel,
    timeFill,
    dateSplit,
} from '../units/tool';

/**
 * 数值格式化(金额 | 数值)
 * @param {Number|String}   number 
 * @param {String}          decimal_place   有效数位  默认保留两位有效数值
 * @param {String}          thousand_mark   千分符号  默认逗号(,) 
 * @param {String}          math_type       round(默认), ceil, floor    设置decimals_place才生效
 * @param {String}          error_msg       错误信息(number不存在情况下)  默认返回--
 */
export function numberFormat(
    number,
    decimal_place = "2",
    thousand_mark = ",",
    math_type = "round",
    error_msg = "--",
) {
    if (number === undefined || number === null || isNaN(number)) { return error_msg; }
    // 格式化为纯粹数值格式字符串，且去空格
    const _number = String(number).replace(/[^0-9+-Ee]/g, "");
    if (_number === "") { return error_msg }
    // 千分符号
    const _mark = /[0-9]/.test(thousand_mark) ? '' : thousand_mark;
    // 有效数值
    const valid_place = Number(decimal_place) ? Math.abs(decimal_place) : 0;
    const valid_num = newToFixed(math_type, _number, valid_place);
    const [before = '0', after = '0'] = strToArr(valid_num, '.');
    // 整数部分
    const integer = thousandsMark(before, _mark);
    // 小数部分
    const decimal = decimalFill(after, valid_place);

    return valid_place ? `${integer}.${decimal}` : `${integer}`;
}


/**
 * 阿拉伯数字转换 (金额)
 * @param {Number|String}   number  数字[正整数]
 * @param {String}          type    文本类型, lower|upper,默认upper
 */
export function numberTransform(
    number,
    type = "upper"
) {
    // 去掉千分号符号
    const _number = number.replace(/,/g, "");
    // 不能超过最大值
    if (Number(_number) > arabic_numberals.maxNumber) {
        console.error(`输入的数值 ${_number} 已超过最大输入数值 ${arabic_numberals.maxNumber}!`);
        return false;
    }
    const _config = arabic_numberals[type];
    // 四舍五入 保留两位有效数值
    const valid_num = newToFixed('round', _number, '2');

    const [before = '0', after = '0'] = strToArr(valid_num, ".");
    const _integer = strToArr(before, "");
    const _decimal = Number(after) === 0 ? [] : strToArr(after, "");
    // 四位分级
    const levels = arabicFourLevel(_integer, _config);
    // 整数部分
    const integer = arabicInteger(levels, _config);
    // 小数部分
    const decimal = arabicDecimal(_decimal, _config, arabic_numberals.decimal);

    return `${integer}元` + (decimal || "整");
}

/**
 * 日期格式化
 * @param {Number} timestamp 
 * @param {String} type 
 * @param {String} mark 
 */
export function dateFormat(
    timestamp,
    type = '',
    mark
) {
    const date = new Date(+timestamp);
    const { year, month, day, hour, min, sec } = dateSplit(date);
    const [m, d, h, mi, s] = timeFill([month, day, hour, min, sec]);
    const dateObj = {
        'YY': `${year}`,
        'YY-MM': `${year}${mark}${m}`,
        'YY-MM-DD': `${year}${mark}${m}${mark}${d}`,
        'YY-MM-DD-HMS': `${year}${mark}${m}${mark}${d} ${h}:${mi}:${s} `,
        'MM-DD': `${m}${mark}${d}`,
        'HMS': `${h}:${mi}:${s}`,
        'HM': `${h}:${mi}`,
        'MS': `${mi}:${s}`,
    };

    return dateObj[type];
}

/**
 * 日期比较
 * @param {Number} startDate 
 * @param {Number} endDate
 * @param {Number} deviceDate
 */
export function dateCompare(
    startDate,
    endDate,
    deviceDate
) {
    let diff;
    if (deviceDate) {
        diff = endDate - (+ new Date()) - startDate + deviceDate;
    } else {
        diff = endDate - startDate;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60 * 24)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const [days, hours, minutes, seconds] = timeFill([d, h, m, s]);

    return { diff, days, hours, minutes, seconds };
}
