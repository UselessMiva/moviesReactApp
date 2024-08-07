import styles from './Header.module.css'
function Header() {
    return <>
    <div className={styles['wrapper']}>
    <h1 className={styles['logo']}>React Movie</h1>
    </div>
    </>
}

export default Header