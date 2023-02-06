import { Chart, Interval, Axis, Tooltip, Legend } from '@antv/f2';

export default (props) => {
  const { data } = props;
  return (
    <Chart data={data}>
      <Axis field="genre" />
      <Axis field="sold" />
      <Interval x="genre" y="sold" color="genre" />
      {/* <Legend/> */}
      {/* <Tooltip /> */}
  </Chart>
  );
};
