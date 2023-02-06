// index.js
import { createElement } from '@antv/f2';
import Chart from './chart';
const data = [
  {
    amount: 20,
    ratio: 0.1,
    memo: '学习',
    const: 'const',
  },
  {
    amount: 100,
    ratio: 0.5,
    memo: '睡觉',
    const: 'const',
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: '吃饭',
    const: 'const',
  },
  {
    amount: 30,
    ratio: 0.15,
    memo: '讲礼貌',
    const: 'const',
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: '其他',
    const: 'const',
  },
  {
    amount: 20,
    ratio: 0.1,
    memo: '运动',
    const: 'const',
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: '暂无备注',
    const: 'const',
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