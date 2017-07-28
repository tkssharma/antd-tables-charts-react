import React from 'react'
import { Row, Col, Table, Alert, Icon } from 'antd';

import GM from 'g2-mobile';
GM.Global.pixelRatio = 2;
const Util = GM.Util;


import createGM from './gm';
 var chartData = [
  {"time": 'x',"tem": 10,"city": "beijing"},
  {"time": 'x',"tem": 22,"city": "beijing"},
  {"time": 'x',"tem": 20,"city": "beijing"},
  {"time": 'x',"tem": 26,"city": "beijing"},
  {"time": 'x',"tem": 20,"city": "beijing"},
  {"time": 'x',"tem": 26,"city": "beijing"},
  {"time": 'x',"tem": 28,"city": "beijing"},
  {"time": 'x',"tem": 5,"city": "newYork"},
  {"time": 'x',"tem": 12,"city": "newYork"},
  {"time": 'x',"tem": 26,"city": "newYork"},
  {"time": 'x',"tem": 20,"city": "newYork"},
  {"time": 'x',"tem": 28,"city": "newYork"},
  {"time": 'xx',"tem": 26,"city": "newYork"},
  {"time": 'xx',"tem": 20,"city": "newYork"}
];

 var pieData = [{pointer: 'dummy',value: 5, length:2,y:1.05}];

 var barData = [
  {"time":"A","tem":6.9,"city":"tokyo"},
  {"time":"B","tem":9.5,"city":"tokyo"},
  {"time":"C","tem":14.5,"city":"tokyo"},
  {"time":"D","tem":18.2,"city":"tokyo"},
  {"time":"E","tem":21.5,"city":"tokyo"},
  {"time":"F","tem":25.2,"city":"tokyo"},
  {"time":"G","tem":26.5,"city":"tokyo"},
  {"time":"H","tem":0.8,"city":"newYork"},
  {"time":"I","tem":5.7,"city":"newYork"},
  {"time":"J","tem":11.3,"city":"newYork"},
  {"time":"K","tem":17,"city":"newYork"}
];
var Shape = GM.Shape;
var G = GM.G;
Shape.registShape('point', 'dashBoard', {
  getShapePoints:function(cfg){
    var x = cfg.x;
    var y = cfg.y;
    return [
      {x: x, y: y},
      {x: x, y: 0.5}
    ]
  },
  drawShape: function(cfg, canvas){
    var point1 = cfg.points[0];
    var point2 = cfg.points[1];
    point1 = this.parsePoint(point1);
    point2 = this.parsePoint(point2);
    G.drawLines([point1, point2], canvas, {
      stroke: '#18b7d6',
      lineWidth: 2
    });
    var text = cfg.origin._origin.value.toString();
    G.drawText(text+'%', cfg.center, canvas, {
      fillStyle: '#f75b5b',
      font:'30px Arial',
      textAlign: 'center',
      textBaseline: 'bottom'
    });
    G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
      fillStyle: '#ccc',
      textAlign: 'center',
      textBaseline: 'top'
    });
  }
});
const Pie = createGM(chart => {
  chart.source(pieData, {
    'value': {type: 'linear',min: 0,max: 15,tickCount: 6},
    'length': {type: 'linear',min: 0,max: 10},
    y: {type: 'linear',min: 0, max: 1}
  });
  chart.coord('polar',{
    inner: 0,
    startAngle: -1.25 * Math.PI,
    endAngle: 0.25 * Math.PI
  });
  //配置value轴刻度线
  chart.axis('value', {
    tickLine: {
      strokeStyle: '#b9e6ef',
      lineWidth: 2,
      value: -5
    },
    label: null,
    grid: null,
    line: null
  });
  chart.axis('y', false);
  //绘制仪表盘辅助元素
  chart.guide().arc([0,1.05],[4.8,1.05],{
    strokeStyle: '#18b7d6',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([5.2,1.05],[9.8,1.05],{
    strokeStyle: '#ccc',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([10.2,1.05],[15,1.05],{
    strokeStyle: '#ccc',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([0,1.2],[15,1.2],{
    strokeStyle: '#ccc',
    lineWidth:1
  });
  chart.guide().text([-0.5,1.3], '0.00%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.guide().text([7.5,0.7], '7.50%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.guide().text([15.5,1.3], '15.00%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.point().position('value*y').size('length').color('#18b7d6').shape('dashBoard');
  chart.render();
}, 218);

const Line = createGM(chart => {
  var defs = {
    time: {
      tickCount: 7,
      range:[0,1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  };

  var label = {
    fill: '#979797',
    font: '14px san-serif',
    offset: 6
  };
  chart.axis('time', {
    label: function (text, index, total) {
      var cfg = Util.mix({}, label);
      if (index === 0) {
        cfg.textAlign = 'start';
      }
      if (index > 0 && index === total - 1) {
        cfg.textAlign = 'end';
      }
      return cfg;
    }
  });

  chart.axis('tem', {
    label: {
      fontSize: 14
    }
  });
  chart.source(chartData, defs);
  chart.line().position('time*tem').color('city').shape('smooth');
  chart.render();
}, 200);

const Bar = createGM(chart => {
  chart.source(barData, {
    tem: {
      tickCount: 5
    }
  });

  chart.axis('time', {
    label:{
      fontSize: 14
    },
    grid: null
  });
  chart.axis('tem', {
    label:{
      fontSize: 14
    }
  });
  chart.intervalStack().position('time*tem').color('city');
  chart.render();
}, 320);


export default class chartComponent extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  callback() {

  }

  render () {

    return (
      <div>

              <Bar
                data={barData}
              />

              <Line
                data={chartData}
              />

              <Pie
                data={pieData}
              />

      </div>
    )
  }
}
