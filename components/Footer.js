import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.tagline}>
          Made with 💀 for security awareness
        </p>

        <nav className={styles.nav}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/about">About</Link>
        </nav>

        <p className={styles.disclaimer}>
          Your password is analyzed locally in your browser.
          <br />
          No data is ever sent to our servers.
        </p>
      </div>
    </footer>
  )
}
