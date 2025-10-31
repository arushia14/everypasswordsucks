import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | EveryPasswordSucks</title>
        <meta name="description" content="Privacy policy for EveryPasswordSucks - learn how we protect your data and respect your privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>

          <div className={styles.content}>
            <p className={styles.lastUpdated}>
              <em>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</em>
            </p>

            <section className={styles.section}>
              <h2>Overview</h2>
              <p>
                At EveryPasswordSucks, your privacy is our top priority. This Privacy Policy explains how we
                collect, use, and protect your information when you use our password testing tool.
              </p>
              <p>
                <strong>TL;DR:</strong> Your passwords never leave your device. We use basic analytics to improve
                the site, but we never see or store the passwords you test.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Password Testing</h2>
              <p>
                <strong>Your passwords are 100% private:</strong>
              </p>
              <ul>
                <li>All password analysis happens entirely in your browser using JavaScript</li>
                <li>Your password is NEVER transmitted over the internet</li>
                <li>Your password is NEVER sent to our servers or any third-party servers</li>
                <li>Your password is NEVER stored, logged, or saved anywhere</li>
                <li>When you close or refresh the page, the password is immediately cleared from memory</li>
              </ul>
              <p>
                We have no technical ability to see the passwords you test. The analysis tool runs completely
                client-side using the open-source zxcvbn library.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Analytics & Cookies</h2>
              <p>
                We use Google Analytics to understand how people use our site. This helps us improve the tool
                and create better content. The analytics we collect include:
              </p>
              <ul>
                <li>Page views and navigation patterns</li>
                <li>Device type and browser information</li>
                <li>General location (country/city level, not precise)</li>
                <li>How you arrived at our site (referrer)</li>
                <li>Button clicks and interactions (but NOT password content)</li>
              </ul>
              <p>
                <strong>What we DON'T collect:</strong>
              </p>
              <ul>
                <li>Your password or any characters from it</li>
                <li>Your personal identity</li>
                <li>Your email address or contact information</li>
                <li>Your precise location</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Affiliate Links</h2>
              <p>
                We use affiliate links to recommend password manager services. When you click these links,
                the password manager company may set cookies to track the referral. We may earn a commission
                if you sign up.
              </p>
              <p>
                These third-party services have their own privacy policies. We encourage you to review them:
              </p>
              <ul>
                <li>1Password Privacy Policy</li>
                <li>LastPass Privacy Policy</li>
                <li>Dashlane Privacy Policy</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Third-Party Services</h2>
              <p>
                Our website uses the following third-party services:
              </p>
              <ul>
                <li><strong>Netlify:</strong> Website hosting (privacy policy at netlify.com/privacy)</li>
                <li><strong>Google Analytics:</strong> Usage analytics (privacy policy at google.com/analytics/terms)</li>
                <li><strong>CDN Providers:</strong> For loading JavaScript libraries (zxcvbn, anime.js)</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Use our tool without creating an account or providing personal information</li>
                <li>Block cookies and analytics using browser settings or extensions</li>
                <li>Request information about any data we may have collected</li>
                <li>Request deletion of any data (though we don't collect passwords)</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a
                child under 13, please contact us.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Security</h2>
              <p>
                We use HTTPS encryption to secure the connection between your browser and our website.
                This prevents anyone from intercepting data transmitted between us.
              </p>
              <p>
                However, since your password never leaves your device, even a compromised connection
                couldn't expose it.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle data, please contact us.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Technical Details (For the Curious)</h2>
              <p>
                If you're technically inclined, you can verify our privacy claims:
              </p>
              <ul>
                <li>Open your browser's Developer Tools (F12)</li>
                <li>Go to the Network tab</li>
                <li>Test a password on our site</li>
                <li>You'll see NO network requests containing your password</li>
                <li>All processing happens in the browser's JavaScript engine</li>
              </ul>
              <p>
                You can also review the source code of the zxcvbn library we use at GitHub.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
