import { jsx, Canvas, Chart, Line, Legend, Tooltip, Axis } from '@antv/f2';
import { jsx as _jsx } from "@antv/f2/jsx-runtime";
import { jsxs as _jsxs } from "@antv/f2/jsx-runtime";
export default (props => {
  const {
    data
  } = props;
  return _jsxs(Chart, {
    data: data,
    scale: {
      time: {
        type: 'timeCat',
        mask: 'hh:mm',
        range: [0, 1],
        tickCount: 6
      },
      value: {
        formatter: value => `${value}%`,
        tickCount: 3
      }
    },
    children: [_jsx(Axis, {
      field: "time",
      style: {
        label: {
          align: 'between'
        }
      }
    }), _jsx(Axis, {
      field: "value"
    }), _jsx(Line, {
      x: "time",
      y: "value",
      shape: {
        field: 'type',
        callback: type => {
          if (type === '预期收益率') {
            return 'line';
          }

          if (type === '实际收益率') {
            return 'dash';
          }
        }
      },
      color: "type"
    }), _jsx(Legend, {
      position: "top"
    }), _jsx(Tooltip, {})]
  });
});