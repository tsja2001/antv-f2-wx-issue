import withAxis from './withAxis';
import AxisView from './axisView';
export { withAxis, AxisView };
declare const _default: {
    new (props: import("./types").AxisProps): {
        style: import("./types").Style<void>;
        willReceiveProps(nextProps: import("./types").AxisProps): void;
        willMount(): void;
        willUpdate(): void;
        getScaleOption(props: import("./types").AxisProps): {
            type: any;
            tickCount: any;
            range: any;
            mask: any;
            formatter: any;
            min: any;
            max: any;
            nice: any;
            ticks: any;
        };
        _getDimType(): "x" | "y";
        getMaxBBox(ticks: any, style: import("./types").Style<void>): {
            height: number;
            width: number;
        };
        _getPosition(): "right" | "left" | "top" | "bottom";
        getTicks(): import("@antv/scale").Tick[];
        _generateGridPoints(ticks: any): any;
        _setTicksStyle(ticks: any): any;
        convertTicks(ticks: any): any;
        measureLayout(): import("../../chart").PositionLayout | import("../../chart").PositionLayout[];
        updateCoord(): void;
        render(): import("../..").JSX.Element;
        props: import("./types").AxisProps;
        state: {};
        context: import("../../base/component").ComponentContext;
        refs: {
            [key: string]: import("../../base/component").default<any, any>;
        };
        updater: import("../../base/component").Updater<{}>;
        children: import("../..").JSX.Element;
        container: any;
        animate: boolean;
        destroyed: boolean;
        didMount(): void;
        didUpdate(): void;
        didUnmount(): void;
        setState(partialState: {}, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        setAnimate(animate: boolean): void;
        destroy(): void;
    };
};
export default _default;
