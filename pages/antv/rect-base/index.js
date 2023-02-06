// index.js
import { createElement } from '@antv/f2';
import Chart from './chart';
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];
Page({
  data: {
    onRenderChart: () => {}
  },
  onReady() {
    this.setData({
      onRenderChart: () => {
        return this.renderChart(data);
      }
    });
  },
  renderChart(data) {
    // return <Chart data={data} />;
    return createElement(Chart, {
      data: data,
    });
  }
});