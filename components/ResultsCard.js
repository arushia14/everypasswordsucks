import styles from './ResultsCard.module.css'

export default function ResultsCard({ result, crackTime, weaknesses, isStrong }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isStrong ? styles.strong : styles.weak}`}>
        <div className={styles.verdict}>
          <span className={styles.icon}>{isStrong ? '✅' : '🚨'}</span>
          <h2 className={styles.title}>
            {isStrong
              ? 'STRONG PASSWORD'
              : crackTime === 'INSTANTLY'
                ? 'CRACKED INSTANTLY'
                : `CRACKED IN ${crackTime}`
            }
          </h2>
        </div>

        <p className={styles.subtitle}>
          {isStrong
            ? 'Your password would take centuries to crack'
            : 'Your password is dangerously weak'}
        </p>
      </div>

      {!isStrong && weaknesses && weaknesses.length > 0 && (
        <div className={styles.weaknessSection}>
          <h3 className={styles.sectionTitle}>What Went Wrong:</h3>
          <ul className={styles.weaknessList}>
            {weaknesses.map((weakness, index) => (
              <li key={index} className={styles.weaknessItem}>
                <span className={styles.cross}>❌</span>
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result && (
        <div className={styles.crackTimeSection}>
          <h3 className={styles.sectionTitle}>
            {isStrong ? 'Estimated Crack Time:' : 'How Hackers Could Crack It:'}
          </h3>
          <div className={styles.crackBars}>
            {result.bruteForce && (
              <div className={styles.crackBar}>
                <span className={styles.crackLabel}>Brute Force:</span>
                <div className={styles.barContainer}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${result.bruteForce.percentage}%` }}
                  />
                </div>
                <span className={styles.crackTime}>{result.bruteForce.time}</span>
              </div>
            )}
            {result.dictionary && (
              <div className={styles.crackBar}>
                <span className={styles.crackLabel}>Dictionary:</span>
                <div className={styles.barContainer}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${result.dictionary.percentage}%` }}
                  />
                </div>
                <span className={styles.crackTime}>{result.dictionary.time}</span>
              </div>
            )}
            {result.pattern && (
              <div className={styles.crackBar}>
                <span className={styles.crackLabel}>Pattern Match:</span>
                <div className={styles.barContainer}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${result.pattern.percentage}%` }}
                  />
                </div>
                <span className={styles.crackTime}>{result.pattern.time}</span>
              </div>
            )}
          </div>

          {isStrong && (
            <p className={styles.strongMessage}>
              A strong password would take: <strong>547 CENTURIES</strong>
            </p>
          )}
          {!isStrong && (
            <p className={styles.comparisonMessage}>
              A strong password would take: <strong>547 CENTURIES</strong>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
