import { jsx, Canvas, Chart, Interval, PieLabel, Legend } from '@antv/f2';
import { jsx as _jsx } from "@antv/f2/jsx-runtime";
import { jsxs as _jsxs } from "@antv/f2/jsx-runtime";
export default (props => {
  const {
    data
  } = props;
  return _jsxs(Chart, {
    data: data,
    coord: {
      type: 'polar',
      transposed: true,
      innerRadius: 0.3,
      radius: 0.6
    },
    scale: {},
    children: [_jsx(Interval, {
      x: "const",
      y: "ratio",
      adjust: "stack",
      color: {
        field: 'memo',
        range: ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273']
      }
    }), _jsx(Legend, {
      position: "top"
    }), _jsx(PieLabel, {
      label1: data => {
        return {
          text: data.memo,
          fill: '#808080'
        };
      },
      label2: data => {
        return {
          fill: '#000000',
          text: '$' + data.amount.toFixed(2),
          fontWeight: 500,
          fontSize: 10
        };
      },
      onClick: data => {
        console.log(data);
      }
    })]
  });
});