import zxcvbn from 'zxcvbn'

export function analyzePassword(password) {
  if (!password || password.length < 4) {
    return {
      score: 0,
      isStrong: false,
      crackTime: 'INSTANTLY',
      crackTimeSeconds: 0,
      weaknesses: ['Password too short to analyze'],
      attacks: {
        bruteForce: { time: 'instant', percentage: 100 },
        dictionary: { time: 'instant', percentage: 100 },
        pattern: { time: 'instant', percentage: 100 }
      }
    }
  }

  const result = zxcvbn(password)
  const score = result.score // 0-4
  const isStrong = score >= 3

  // Extract weaknesses
  const weaknesses = []

  if (password.length < 12) {
    weaknesses.push(`Too short (only ${password.length} characters)`)
  }

  if (result.feedback.warning) {
    weaknesses.push(result.feedback.warning)
  }

  result.feedback.suggestions.forEach(suggestion => {
    weaknesses.push(suggestion)
  })

  // Check for common patterns
  if (result.sequence && result.sequence.length > 0) {
    result.sequence.forEach(seq => {
      if (seq.pattern === 'dictionary') {
        weaknesses.push(`Common word detected: "${seq.token}"`)
      }
      if (seq.pattern === 'sequence') {
        weaknesses.push(`Keyboard sequence detected: "${seq.token}"`)
      }
      if (seq.pattern === 'repeat') {
        weaknesses.push(`Repeated characters: "${seq.token}"`)
      }
    })
  }

  // No special characters check
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    weaknesses.push('No special characters')
  }

  // No numbers check
  if (!/\d/.test(password)) {
    weaknesses.push('No numbers included')
  }

  // Format crack time
  const crackTime = formatCrackTime(result.crack_times_seconds.offline_slow_hashing_1e4_per_second)
  const crackTimeDisplay = formatCrackTimeDisplay(result.crack_times_display.offline_slow_hashing_1e4_per_second)

  // Calculate attack percentages (for visual bars)
  const maxTime = 60 * 60 * 24 * 365 * 100 // 100 years in seconds
  const bruteForcePercentage = Math.min(
    (result.crack_times_seconds.offline_slow_hashing_1e4_per_second / maxTime) * 100,
    100
  )
  const dictionaryPercentage = Math.min(
    (result.crack_times_seconds.online_no_throttling_10_per_second / maxTime) * 100,
    100
  )
  const patternPercentage = result.sequence && result.sequence.length > 0 ? 90 : 10

  return {
    score,
    isStrong,
    crackTime: crackTimeDisplay,
    crackTimeSeconds: result.crack_times_seconds.offline_slow_hashing_1e4_per_second,
    weaknesses: weaknesses.length > 0 ? weaknesses : null,
    attacks: {
      bruteForce: {
        time: formatCrackTimeDisplay(result.crack_times_display.offline_slow_hashing_1e4_per_second),
        percentage: isStrong ? 5 : Math.max(bruteForcePercentage, 20)
      },
      dictionary: {
        time: formatCrackTimeDisplay(result.crack_times_display.online_no_throttling_10_per_second),
        percentage: isStrong ? 3 : Math.max(dictionaryPercentage, 15)
      },
      pattern: {
        time: result.sequence && result.sequence.length > 0 ? 'instant' : 'resistant',
        percentage: isStrong ? 2 : patternPercentage
      }
    },
    entropy: result.guesses_log10
  }
}

function formatCrackTime(seconds) {
  if (seconds < 1) return 'INSTANTLY'
  if (seconds < 60) return `${Math.ceil(seconds)} SECONDS`
  if (seconds < 3600) return `${Math.ceil(seconds / 60)} MINUTES`
  if (seconds < 86400) return `${Math.ceil(seconds / 3600)} HOURS`
  if (seconds < 2592000) return `${Math.ceil(seconds / 86400)} DAYS`
  if (seconds < 31536000) return `${Math.ceil(seconds / 2592000)} MONTHS`
  if (seconds < 3153600000) return `${Math.ceil(seconds / 31536000)} YEARS`
  return 'CENTURIES'
}

function formatCrackTimeDisplay(displayString) {
  // zxcvbn returns strings like "less than a second", "3 hours", "centuries"
  if (displayString.includes('less than a second')) return 'INSTANTLY'
  if (displayString.includes('centuries')) return 'CENTURIES'
  return displayString.toUpperCase()
}

export function getPasswordStrengthColor(score) {
  switch (score) {
    case 0:
    case 1:
      return 'var(--danger)'
    case 2:
      return 'var(--warning)'
    case 3:
    case 4:
      return 'var(--success)'
    default:
      return 'var(--text-muted)'
  }
}
