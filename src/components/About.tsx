import { useLang } from '../hooks/useLang';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/blocks/About.css';

const REVEAL_SELECTOR = '.about-eyebrow, .about-name, .about-role, .about-bio';

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
        <p className="about-bio">{t('curator_bio')}</p>
        <a
          href="https://www.instagram.com/indieweed"
          target="_blank"
          rel="noopener noreferrer"
          className="about-instagram"
          aria-label="Instagram"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
      </div>

      <div className="about-photo-wrapper">
        <img src="/eugene-couple.jpg" className="about-photo" alt="Rome" />
        <div className="about-photo-overlay about-photo-overlay--top" />
      </div>
    </section>
  );
}

export default About;
