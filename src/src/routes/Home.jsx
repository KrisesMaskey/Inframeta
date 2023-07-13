import React from 'react'
import styles from './Home.module.css'
import TCHealthBox from '../components/utils/TCHealthBox'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className={styles.home}>
        <Leftbar/>  

        <div className={styles.homeContainer}>
          <Navbar/>
          
        </div>
    </div>
  )
}

export default Home