import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PasswordInput from '../components/PasswordInput'
import AttackPanel from '../components/AttackPanel'
import ResultsCard from '../components/ResultsCard'
import AffiliateCard from '../components/AffiliateCard'
import ShareButtons from '../components/ShareButtons'
import { analyzePassword } from '../lib/passwordAnalyzer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [password, setPassword] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [showResults, setShowResults] = useState(false)

  // Attack panel states for animation
  const [attackStates, setAttackStates] = useState({
    bruteForce: { progress: 0, attempts: '0', time: 'Calculating...', status: 'Preparing...' },
    dictionary: { progress: 0, attempts: '0', time: 'Calculating...', status: 'Preparing...' },
    pattern: { progress: 0, attempts: '0', time: 'Calculating...', status: 'Preparing...' },
    breach: { progress: 0, attempts: '0', time: 'Calculating...', status: 'Preparing...' }
  })

  const handleTestPassword = () => {
    if (!password.trim()) {
      // Show error
      return
    }

    setIsAnalyzing(true)
    setShowResults(false)

    // Analyze password
    const result = analyzePassword(password)

    // Start animation sequence
    animateAttackSequence(result)
  }

  const animateAttackSequence = (result) => {
    // Phase 1: Scanning (0-2s)
    setTimeout(() => {
      setAttackStates({
        bruteForce: { progress: 0, attempts: '0', time: 'Starting...', status: 'Attempting...' },
        dictionary: { progress: 0, attempts: '0', time: 'Starting...', status: 'Checking words...' },
        pattern: { progress: 0, attempts: '0', time: 'Starting...', status: 'Analyzing...' },
        breach: { progress: 0, attempts: '0', time: 'Starting...', status: 'Searching...' }
      })
    }, 500)

    // Phase 2: Attack animations (2-6s)
    // Simulate progressive updates
    const intervals = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500]

    intervals.forEach((delay, index) => {
      setTimeout(() => {
        const progress = Math.min((index + 1) * 10, 100)
        setAttackStates({
          bruteForce: {
            progress: Math.min(progress + 10, 95),
            attempts: formatNumber((index + 1) * 234182),
            time: result.attacks.bruteForce.time,
            status: 'Attempting...'
          },
          dictionary: {
            progress: Math.min(progress, 90),
            attempts: formatNumber((index + 1) * 1532),
            time: result.attacks.dictionary.time,
            status: 'Checking words...'
          },
          pattern: {
            progress: Math.min(progress + 5, 85),
            attempts: 'Keyboard: qwer',
            time: result.attacks.pattern.time,
            status: 'Analyzing...'
          },
          breach: {
            progress: Math.min(progress - 5, 80),
            attempts: '894M passwords',
            time: result.isStrong ? 'Not found' : 'Match found! ⚠️',
            status: 'Searching...'
          }
        })
      }, delay)
    })

    // Phase 3: Show results (6s)
    setTimeout(() => {
      setAnalysisResult(result)
      setIsAnalyzing(false)
      setShowResults(true)

      // Scroll to results after a short delay
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 500)
    }, 6000)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <>
      <Head>
        <title>Password Strength Checker - Is Your Password Secure? | EveryPasswordSucks</title>
        <meta name="description" content="Test your password security in real-time. Watch how quickly hackers can crack your password and learn how to protect yourself." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="My password would be cracked in 3 hours 😱" />
        <meta property="og:description" content="Test your password before hackers do. Free security check in 10 seconds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://everypasswordsucks.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Password Strength Checker | EveryPasswordSucks" />
        <meta name="twitter:description" content="Test your password security before hackers do." />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "EveryPasswordSucks",
              "description": "Password strength testing tool - Test your password security before hackers do",
              "url": "https://everypasswordsucks.com",
              "applicationCategory": "SecurityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "browserRequirements": "Requires JavaScript. Works on all modern browsers.",
              "softwareVersion": "1.0",
              "operatingSystem": "Any",
              "permissions": "No permissions required - runs entirely in browser"
            })
          }}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.headline}>
              Your Password Sucks.<br />
              Let Us Prove It.
            </h1>
            <p className={styles.subheadline}>
              Watch in real-time as we (safely) crack your password
            </p>

            <div className={styles.inputContainer}>
              <PasswordInput
                value={password}
                onChange={setPassword}
                onSubmit={handleTestPassword}
                disabled={isAnalyzing}
              />
            </div>

            <button
              className={styles.ctaButton}
              onClick={handleTestPassword}
              disabled={isAnalyzing || !password.trim()}
            >
              {isAnalyzing ? 'ANALYZING...' : 'TEST MY PASSWORD →'}
            </button>

            <p className={styles.privacyNote}>
              Your password never leaves your device
            </p>
          </div>
        </section>

        {/* Animation Section */}
        {isAnalyzing && (
          <section className={styles.animationSection}>
            <div className={styles.container}>
              <h2 className={styles.analyzingText}>Analyzing your password...</h2>

              <div className={styles.attackGrid}>
                <AttackPanel
                  icon="🔨"
                  title="BRUTE FORCE"
                  status={attackStates.bruteForce.status}
                  progress={attackStates.bruteForce.progress}
                  attempts={`${attackStates.bruteForce.attempts} attempts`}
                  time={attackStates.bruteForce.time}
                  vulnerable={attackStates.bruteForce.progress > 70}
                />
                <AttackPanel
                  icon="📚"
                  title="DICTIONARY"
                  status={attackStates.dictionary.status}
                  progress={attackStates.dictionary.progress}
                  attempts={`${attackStates.dictionary.attempts} tested`}
                  time={attackStates.dictionary.time}
                  vulnerable={attackStates.dictionary.progress > 60}
                />
                <AttackPanel
                  icon="🎯"
                  title="PATTERNS"
                  status={attackStates.pattern.status}
                  progress={attackStates.pattern.progress}
                  attempts={attackStates.pattern.attempts}
                  time={attackStates.pattern.time}
                  vulnerable={attackStates.pattern.progress > 50}
                />
                <AttackPanel
                  icon="💾"
                  title="BREACH DB"
                  status={attackStates.breach.status}
                  progress={attackStates.breach.progress}
                  attempts={attackStates.breach.attempts}
                  time={attackStates.breach.time}
                  vulnerable={attackStates.breach.time.includes('Match found')}
                />
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {showResults && analysisResult && (
          <section id="results-section" className={styles.resultsSection}>
            <div className={styles.container}>
              <ResultsCard
                result={analysisResult.attacks}
                crackTime={analysisResult.crackTime}
                weaknesses={analysisResult.weaknesses}
                isStrong={analysisResult.isStrong}
              />
              <ShareButtons crackTime={analysisResult.crackTime} />
            </div>
          </section>
        )}

        {/* Affiliate Section */}
        {showResults && (
          <section className={styles.affiliateSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Never Remember Another Password</h2>
              <p className={styles.sectionSubtitle}>
                Security experts don't memorize passwords. Neither should you.<br />
                Password managers generate and store strong, unique passwords for every account.
              </p>

              <div className={styles.affiliateGrid}>
                <AffiliateCard
                  name="1Password"
                  stars={5}
                  feature1="Military-grade encryption"
                  feature2="Easy family sharing"
                  price="$2.99/mo"
                  ctaText="TRY FREE"
                  ctaLink="https://1password.com"
                />
                <AffiliateCard
                  name="LastPass"
                  stars={5}
                  feature1="Easy to use"
                  feature2="Auto-fill everywhere"
                  price="Free tier"
                  ctaText="GET FREE"
                  ctaLink="https://lastpass.com"
                />
                <AffiliateCard
                  name="Dashlane"
                  stars={5}
                  feature1="Dark web monitoring"
                  feature2="VPN included"
                  price="$3.99/mo"
                  ctaText="TRY FREE"
                  ctaLink="https://dashlane.com"
                />
              </div>
            </div>
          </section>
        )}

        {/* Educational Section */}
        <section className={styles.educationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How Hackers Actually Work</h2>

            <div className={styles.educationContent}>
              <div className={styles.educationItem}>
                <h3>🔨 BRUTE FORCE</h3>
                <p>Trying every possible combination until one works. Modern GPUs can try 10 billion attempts per second.</p>
              </div>

              <div className={styles.educationItem}>
                <h3>📚 DICTIONARY ATTACKS</h3>
                <p>Testing common words, phrases, and variations. Databases contain 10+ million common passwords.</p>
              </div>

              <div className={styles.educationItem}>
                <h3>🎯 PATTERN RECOGNITION</h3>
                <p>Exploiting human predictability (qwerty, 123456, etc.). 85% of passwords follow predictable patterns.</p>
              </div>

              <div className={styles.educationItem}>
                <h3>💾 CREDENTIAL STUFFING</h3>
                <p>Using passwords leaked in previous data breaches. Over 15 billion credentials available on dark web.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
