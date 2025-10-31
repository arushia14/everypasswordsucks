import styles from './AttackPanel.module.css'

export default function AttackPanel({
  icon,
  title,
  status,
  progress,
  attempts,
  time,
  vulnerable = false
}) {
  return (
    <div className={`${styles.panel} ${vulnerable ? styles.vulnerable : ''}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.content}>
        <p className={styles.status}>{status}</p>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={styles.progressText}>{progress}%</p>

        {attempts && (
          <p className={styles.attempts}>{attempts}</p>
        )}

        <div className={styles.timeContainer}>
          <p className={styles.time}>{time}</p>
          {vulnerable && <span className={styles.warningIcon}>⚠️</span>}
        </div>
      </div>
    </div>
  )
}
