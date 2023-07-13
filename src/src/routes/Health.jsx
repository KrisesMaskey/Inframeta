import React from 'react'
import TCHealthBox from '../components/utils/TCHealthBox'
import styles from './Health.module.css'

function Health() {
  return (
    <div className={styles.chartbox}>
      <TCHealthBox/>
      <TCHealthBox/>
    </div>
  )
}

export default Health