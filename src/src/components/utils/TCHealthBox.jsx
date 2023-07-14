import React from 'react'
import styles from './TCHealthBox.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
//import jsonData from './data.json';

ChartJS.register(ArcElement, Tooltip, Legend);
const data1 = require('./data.json');

//const data1 = JSON.parse(json_data);
const upApps = [];
const downApps = [];

for (const app of data1.TC01) {
  for (const url in app) {
    const details = app[url];
    if (details.App_status === 'up') {
      upApps.push(details.App_name);
    } else if (details.App_status === 'down') {
      downApps.push(details.App_name);
    }
  }
}
var data = {
  labels: [
    'Down',
    'Up'
  ],
  datasets: [{
    data: [downApps.length, upApps.length],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

var options = {
  maintainAspectRatio: false,
  responsive: false,
  scales: {
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },
}

function TCHealthBox(props) {
  return (
    <div className={styles.healthContainer}>
      <div className="name">
        {props.name}
      </div>
      <div className={styles.chart}>
        <Doughnut
          data={data}
          height={200}
          options={options} />
      </div>
    </div>
  )
}

export default TCHealthBox