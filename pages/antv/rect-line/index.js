// index.js
import { createElement } from '@antv/f2';
import Chart from './chart';
const data = [
  {
    time: '2016-08-08 00:00:00',
    value: 10,
    type: '预期收益率',
  },
  {
    time: '2016-08-08 00:10:00',
    value: 22,
    type: '预期收益率',
  },
  {
    time: '2016-08-08 00:30:00',
    value: 16,
    type: '预期收益率',
  },
  {
    time: '2016-08-09 00:35:00',
    value: 26,
    type: '预期收益率',
  },
  {
    time: '2016-08-09 01:00:00',
    value: 12,
    type: '预期收益率',
  },
  {
    time: '2016-08-09 01:20:00',
    value: 26,
    type: '预期收益率',
  },
  {
    time: '2016-08-10 01:40:00',
    value: 18,
    type: '预期收益率',
  },
  {
    time: '2016-08-10 02:00:00',
    value: 26,
    type: '预期收益率',
  },
  {
    time: '2016-08-10 02:20:00',
    value: 12,
    type: '预期收益率',
  },
  {
    time: '2016-08-08 00:00:00',
    value: 4,
    type: '实际收益率',
  },
  {
    time: '2016-08-08 00:10:00',
    value: 3,
    type: '实际收益率',
  },
  {
    time: '2016-08-08 00:30:00',
    value: 6,
    type: '实际收益率',
  },
  {
    time: '2016-08-09 00:35:00',
    value: -12,
    type: '实际收益率',
  },
  {
    time: '2016-08-09 01:00:00',
    value: 1,
    type: '实际收益率',
  },
  {
    time: '2016-08-09 01:20:00',
    value: 9,
    type: '实际收益率',
  },
  {
    time: '2016-08-10 01:40:00',
    value: 13,
    type: '实际收益率',
  },
  {
    time: '2016-08-10 02:00:00',
    value: -3,
    type: '实际收益率',
  },
  {
    time: '2016-08-10 02:20:00',
    value: 11,
    type: '实际收益率',
  },
  {
    time: '2016-08-08 00:00:00',
    value: -2,
    type: '数据1',
  },
  {
    time: '2016-08-08 00:10:00',
    value: 12,
    type: '数据1',
  },
  {
    time: '2016-08-08 00:30:00',
    value: 4,
    type: '数据1',
  },
  {
    time: '2016-08-09 00:35:00',
    value: -1,
    type: '数据1',
  },
  {
    time: '2016-08-09 01:00:00',
    value: 6,
    type: '数据1',
  },
  {
    time: '2016-08-09 01:20:00',
    value: 8,
    type: '数据1',
  },
  {
    time: '2016-08-10 01:40:00',
    value: 1,
    type: '数据1',
  },
  {
    time: '2016-08-10 02:00:00',
    value: 2,
    type: '数据1',
  },
  {
    time: '2016-08-10 02:20:00',
    value: 12,
    type: '数据1',
  },
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
    // 如果不使用 jsx, 用下面代码效果也是一样的
    return createElement(Chart, {
      data: data,
    });
  }
});