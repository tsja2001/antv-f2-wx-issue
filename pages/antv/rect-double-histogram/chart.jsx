import { Chart, Interval, Axis, Tooltip, Legend } from '@antv/f2';

export default (props) => {
  const { data } = props;
  return (
    <Chart data={data}>
        <Axis field="月份" />
        <Axis field="月均降雨量" />
        <Interval
          x="月份"
          y="月均降雨量"
          color="name"
          adjust={{
            type: 'dodge',
            marginRatio: 0.05,
          }}
        />
      </Chart>
  );
};
