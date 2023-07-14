import React from 'react'
import styles from './Navbar.module.css'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleIcon from '@mui/icons-material/Circle';
import { red } from '@mui/material/colors';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper} >
        <div className={styles.search}> 

          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.clickable}>
              <DarkModeIcon style={{color: 'grey'}} />
            </div>
          </div>
          <div className={styles.item}>
            <CircleIcon style={{fontSize: '16px', color: 'Green'}}/>
            <p>&ensp;Overall Health</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar