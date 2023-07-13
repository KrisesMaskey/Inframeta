import React from 'react'
import styles from './Leftbar.module.css'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Leftbar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.top}>
            <span className={styles.logo}>
                <img src='/assets/Barclays-Logo.png' alt="Barclays" />
            </span>
        </div>
        <div className={styles.center}>
            <ul>
                <li>
                    &emsp;<PersonOutlineOutlinedIcon/>
                    <span>&nbsp; User</span>
                </li>
                <li>
                    &emsp;<CalendarMonthOutlinedIcon/>
                    <span>&nbsp; Calendar</span>
                </li>
                <li>
                    &emsp;<SettingsOutlinedIcon/>
                    <span>&nbsp; Settings</span>   
                </li>
            </ul>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottomText}>
                    &emsp;<HelpOutlineOutlinedIcon/>
                    <span>&nbsp; Help</span>
            </div>
        </div>
    </div>
  )
}

export default Leftbar