import styles from './Footer.module.css'
function Footer() {
    return <>
    <div className={styles['wrapper']}>
      <div className={styles['inner-text']}>© {new Date().getFullYear()} Copyright Text</div>
    
    </div>
    </>
}

export default Footer