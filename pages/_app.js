import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

export default function App({ Component, pageProps }) {
  // Add your Google Analytics measurement ID here
  // Get it from: https://analytics.google.com/
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

  return (
    <>
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
