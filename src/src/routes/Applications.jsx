import React from 'react'
import styles from './Applications.module.css'
import Apptable from '../components/utils/Apptable'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import { red } from '@mui/material/colors'

function Applications() {
  return (
    <div className={styles.appContainer}>
      <Leftbar/>  
      <div className={styles.homeContainer}>
        <div className={styles.tabBar}>
          <div className={styles.tabs}>
            <span>Application Monitoring</span>
            <div className={styles.active} style={{height: '30px' , width: '100px', backgroundColor: '#98FB98', borderRadius: '10px'}}>
              <span>Server Health</span>
            </div>
            
            <span>Incident Management</span>
            <span>Team Health</span>
          </div>
        </div>
        <Apptable></Apptable>
      </div>
    </div>
  )
}




export default Applications
