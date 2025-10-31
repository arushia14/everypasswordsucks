import styles from './AffiliateCard.module.css'

export default function AffiliateCard({
  name,
  stars = 5,
  feature1,
  feature2,
  price,
  ctaText,
  ctaLink,
  affiliateTag
}) {
  const handleClick = () => {
    // Track affiliate click with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        provider: name.toLowerCase(),
        placement: 'results_cta'
      })
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.stars}>
          {[...Array(stars)].map((_, i) => (
            <span key={i} className={styles.star}>⭐</span>
          ))}
        </div>
      </div>

      <div className={styles.features}>
        <p className={styles.feature}>{feature1}</p>
        <p className={styles.feature}>{feature2}</p>
      </div>

      <div className={styles.pricing}>
        <p className={styles.price}>{price}</p>
      </div>

      <a
        href={`${ctaLink}${affiliateTag || ''}`}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {ctaText}
      </a>
    </div>
  )
}
