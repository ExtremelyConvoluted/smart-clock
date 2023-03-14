import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p id="settingsText" onClick={ () => alert(1) }>Settings</p>
      </footer>
    </>
  )
}
