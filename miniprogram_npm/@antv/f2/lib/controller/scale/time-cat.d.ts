export const __esModule: boolean;
export default _default;
declare var _default: new (cfg: Partial<{
    field: string;
    values: any[];
    min: any;
    max: any;
    minLimit?: any;
    maxLimit?: any;
    alias: string;
    range: number[];
    base: number;
    exponent: number;
    nice: boolean;
    ticks: any[];
    tickInterval: number;
    minTickInterval: number;
    tickCount: number;
    maxTickCount: number;
    formatter: (value: any, index?: number) => any;
    tickMethod: string | import("@antv/scale/lib/types").TickMethod;
    mask?: string;
    showLast?: boolean;
}>) => _scale.Scale;
import _scale = require("@antv/scale");