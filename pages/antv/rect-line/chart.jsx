import { jsx, Canvas, Chart, Line, Legend, Tooltip, Axis } from '@antv/f2';

export default (props) => {
  const { data } = props;
  return (
    <Chart
      data={data}
      scale={{
        time: {
          type: 'timeCat',
          mask: 'hh:mm',
          range: [0, 1],
          tickCount: 6,
        },
        value: {
          formatter: (value) => `${value}%`,
          tickCount: 3,
        },
      }}
    >
      <Axis field="time" style={{ label: { align: 'between' } }} />
      <Axis field="value" />
      <Line
        x="time"
        y="value"
        shape={{
          field: 'type',
          callback: (type) => {
            if (type === '预期收益率') {
              return 'line';
            }
            if (type === '实际收益率') {
              return 'dash';
            }
          },
        }}
        color="type"
      />
      <Legend position="top" />
      <Tooltip />
    </Chart>
  );
};
