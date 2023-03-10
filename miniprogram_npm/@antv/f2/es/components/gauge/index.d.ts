declare const _default: new (props: any, context?: import("../../base/component").ComponentContext, updater?: import("../../base/component").Updater<any>) => {
    render(): import("../..").JSX.Element;
    props: any;
    state: any;
    context: import("../../base/component").ComponentContext;
    refs: {
        [key: string]: import("../../base/component").default<any, any>;
    };
    updater: import("../../base/component").Updater<any>;
    children: import("../..").JSX.Element;
    container: any;
    animate: boolean;
    destroyed: boolean;
    willMount(): void;
    didMount(): void;
    willReceiveProps(_props: any, context?: any): void;
    willUpdate(): void;
    didUpdate(): void;
    didUnmount(): void;
    setState(partialState: any, callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    setAnimate(animate: boolean): void;
    destroy(): void;
};
export default _default;
import withGauge from "./withGauge";
import GaugeView from "./gaugeView";
export { withGauge, GaugeView };
