import { Chart, Interval, Axis, Tooltip, Legend } from '@antv/f2';
import { jsx as _jsx } from "@antv/f2/jsx-runtime";
import { jsxs as _jsxs } from "@antv/f2/jsx-runtime";
export default (props => {
  const {
    data
  } = props;
  return _jsxs(Chart, {
    data: data,
    children: [_jsx(Axis, {
      field: "\u6708\u4EFD"
    }), _jsx(Axis, {
      field: "\u6708\u5747\u964D\u96E8\u91CF"
    }), _jsx(Interval, {
      x: "\u6708\u4EFD",
      y: "\u6708\u5747\u964D\u96E8\u91CF",
      color: "name",
      adjust: {
        type: 'dodge',
        marginRatio: 0.05
      }
    })]
  });
});