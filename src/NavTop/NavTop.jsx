import React from 'react';
import styles from'./NavTop.css';
export default function NavTop() {
  return (
    <>
    <div className={styles['nav-top']}>
    <div className='left'>
        <span>Write a review </span>
        <span>Events</span>
    </div>
    <div className='right'>
        <span>Log In </span>
        <button className="button">Sign Up</button>
        <div></div>
    </div>
    </div>
    </>
  )
}
