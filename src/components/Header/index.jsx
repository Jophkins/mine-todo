import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.header_title}>
        TO-DO
      </div>
      <div className={styles.header_account}>
        <div className={styles.header_account__circle}>
          <img src="https://yt3.ggpht.com/ytc/AAUvwngdWhJdK5I8pEXuulg8EmisrviZx4fhO7uZZqFmDw=s900-c-k-c0x00ffffff-no-rj" height="50" width="50" alt=""/>
        </div>
        <div className={styles.header_account__name}>
          Your account
        </div>
      </div>
    </div>
  )
}

export default Header;