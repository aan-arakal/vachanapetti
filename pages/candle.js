

import styles from '../styles/Home.module.css'
export default function Candle(){
return (
    <div className={styles.candle}>
    <div className={styles.flame}>
      <div className={styles.shadows}></div>
      <div className={styles.top}></div>
      <div className={styles.middle}></div>
      <div className={styles.bottom}></div>
    </div>
    <div className={styles.wick}></div>
    <div className={styles.wax}></div>
  
  
    
  </div>
)
}