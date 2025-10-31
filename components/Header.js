import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.skull}>💀</span>
          <span className={styles.logoText}>EveryPasswordSucks</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  )
}
