/**
 * 浮点数截取小数点前后部分
 * @param {String} num 
 * @param {String} mark 
 */
export function strToArr(num, mark) {
    return ("" + num).split(mark);
}