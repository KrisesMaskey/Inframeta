import React from 'react'
import styles from './TCHealthBox.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var data = {
  labels: [
    'Down',
    'Up'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [30, 500],
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
  scales: {
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },
}

function TCHealthBox() {
  return (
    <><div className={styles.healthContainer}></div><div>
      <Doughnut
        data={data}
        height={200}
        options={options} />
    </div></>
  )
}

export default TCHealthBox