import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

export default function App({ Component, pageProps }) {
  // Add your Google Analytics measurement ID here
  // Get it from: https://analytics.google.com/
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-GPGMS2LWXH'

  // Debug: log to console (remove after testing)
  if (typeof window !== 'undefined') {
    console.log('GA Measurement ID:', GA_MEASUREMENT_ID)
  }

  return (
    <>
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
