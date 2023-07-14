import React from 'react'
import styles from './Applications.module.css'
import Apptable from '../components/utils/Apptable'

function Applications() {
  return (
    <div className={styles.appContainer}>
        Application Center
        <Apptable></Apptable>
    </div>
  )
}




export default Applications
