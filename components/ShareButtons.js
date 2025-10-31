import { useState } from 'react'
import styles from './ShareButtons.module.css'

export default function ShareButtons({ crackTime }) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.origin : 'https://everypasswordsucks.com'
  const text = crackTime
    ? `I tested my password security and it would be cracked in ${crackTime} 😱 Test yours:`
    : `Test your password security before hackers do:`

  const handleShare = (platform) => {
    // Track share with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share_click', {
        platform: platform
      })
    }

    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'reddit':
        shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      default:
        return
    }

    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share_click', {
          platform: 'copy_link'
        })
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Share Your Result</h3>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.twitter}`}
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
        >
          <span className={styles.icon}>𝕏</span>
          <span className={styles.label}>Twitter</span>
        </button>

        <button
          className={`${styles.button} ${styles.linkedin}`}
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
        >
          <span className={styles.icon}>in</span>
          <span className={styles.label}>LinkedIn</span>
        </button>

        <button
          className={`${styles.button} ${styles.reddit}`}
          onClick={() => handleShare('reddit')}
          aria-label="Share on Reddit"
        >
          <span className={styles.icon}>↗</span>
          <span className={styles.label}>Reddit</span>
        </button>

        <button
          className={`${styles.button} ${styles.copy}`}
          onClick={handleCopyLink}
          aria-label="Copy link"
        >
          <span className={styles.icon}>{copied ? '✓' : '🔗'}</span>
          <span className={styles.label}>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
}
