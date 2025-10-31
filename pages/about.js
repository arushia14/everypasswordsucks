import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Page.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About | EveryPasswordSucks</title>
        <meta name="description" content="Learn about EveryPasswordSucks - a free tool to test password security and raise awareness about cybersecurity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>About EveryPasswordSucks</h1>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                We built EveryPasswordSucks to help people understand just how vulnerable their passwords really are.
                Most people use weak, predictable passwords without realizing how quickly hackers can crack them.
              </p>
              <p>
                This free tool demonstrates in real-time how various attack methods could compromise your password,
                helping you make better security decisions.
              </p>
            </section>

            <section className={styles.section}>
              <h2>How It Works</h2>
              <p>
                Our tool uses the industry-standard zxcvbn library developed by Dropbox to analyze password strength.
                All analysis happens entirely in your browser - your password never leaves your device and is never
                sent to any server.
              </p>
              <p>
                The "cracking" animation simulates four common attack methods that hackers use:
              </p>
              <ul>
                <li><strong>Brute Force:</strong> Systematically trying every possible combination</li>
                <li><strong>Dictionary Attack:</strong> Testing common words and phrases</li>
                <li><strong>Pattern Recognition:</strong> Exploiting predictable patterns like "qwerty" or "123456"</li>
                <li><strong>Breach Database:</strong> Using passwords leaked in previous data breaches</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Privacy & Security</h2>
              <p>
                <strong>Your privacy is paramount.</strong> This tool is built with privacy-first principles:
              </p>
              <ul>
                <li>All password analysis happens locally in your browser using JavaScript</li>
                <li>Your password is never transmitted over the internet</li>
                <li>We don't store, log, or have any access to the passwords you test</li>
                <li>No cookies or tracking beyond basic analytics (page views, not passwords)</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Why Password Managers?</h2>
              <p>
                We recommend password managers because they solve the fundamental problem: humans are terrible
                at creating and remembering strong, unique passwords for dozens of accounts.
              </p>
              <p>
                Password managers generate truly random, strong passwords and store them securely with military-grade
                encryption. You only need to remember one master password.
              </p>
              <p>
                The password managers we feature (1Password, LastPass, Dashlane) are industry leaders trusted by
                millions of users and security professionals worldwide.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Affiliate Disclosure</h2>
              <p>
                This site contains affiliate links to password manager services. If you sign up through our links,
                we may earn a commission at no extra cost to you. These commissions help us maintain and improve
                this free tool.
              </p>
              <p>
                We only recommend products we genuinely believe in and that serve our mission of improving
                online security.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Open Source</h2>
              <p>
                This project uses open-source libraries including zxcvbn for password analysis and anime.js for
                animations. We're grateful to the open-source community for making tools like this possible.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Contact</h2>
              <p>
                Questions, feedback, or concerns? We'd love to hear from you.
              </p>
              <p>
                <strong>Note:</strong> We cannot help you recover lost passwords or hack into accounts.
                Please don't ask!
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
