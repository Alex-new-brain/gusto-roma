import { useLang } from '../hooks/useLang';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/blocks/About.css';

const REVEAL_SELECTOR = '.about-eyebrow, .about-name, .about-role, .about-fact, .about-bio';

function About() {
  const { t } = useLang();
  const ref = useScrollReveal<HTMLDivElement>(REVEAL_SELECTOR);

  return (
    <section id="about" className="about">
      <div className="about-photo-wrapper">
        <img src="/eugene-bar.jpg" className="about-photo" alt="Eugene" />
        <div className="about-photo-overlay about-photo-overlay--bottom" />
      </div>

      <div className="about-content" ref={ref}>
        <p className="about-eyebrow">{t('curator_eyebrow')}</p>
        <h2 className="about-name">{t('curator_name')}</h2>
        <p className="about-role">{t('curator_role')}</p>
        <p className="about-fact">{t('curator_fact')}</p>
        <p className="about-bio">{t('curator_bio')}</p>

        <div className="about-socials">
          <a
            href="https://www.instagram.com/indieweed"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/eugene-husiev"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M7 11v6M7 8v.01M11 17v-4a2 2 0 114 0v4M11 11v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/euginenation"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social"
            aria-label="Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M15.5 5.5H14a3 3 0 00-3 3v2H9v3h2v6h3v-6h2l1-3h-3v-2a1 1 0 011-1h1.5v-2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="about-photo-wrapper">
        <img src="/eugene-couple.jpg" className="about-photo" alt="Rome" />
        <div className="about-photo-overlay about-photo-overlay--top" />
      </div>
    </section>
  );
}

export default About;
