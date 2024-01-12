// 流程代码-》模块化（JS工具）
import { useNumberFormat } from './number';

Number.prototype.numberFormat = function () {
    return useNumberFormat(this)
};