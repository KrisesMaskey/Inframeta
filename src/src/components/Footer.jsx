import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.footerText}>&copy; Barclays Restricted - Internal</span >
    </div>
  )
}

export default Footer