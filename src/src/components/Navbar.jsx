import React from 'react'
import styles from './Navbar.module.css'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

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
            <DarkModeOutlinedIcon />
          </div>
          <div className={styles.item}>
            <CircleOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar