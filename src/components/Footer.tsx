import { useLang } from '../hooks/useLang';
import '../styles/blocks/Footer.css';

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <p className="footer__line1">{t('footer_line1')}</p>
      <p className="footer__line2">{t('footer_line2')}</p>

      <p className="footer__by">{t('footer_by')}</p>
      <p className="footer__name">{t('curator_name')}</p>
      <p className="footer__role">{t('footer_role')}</p>

      <button className="footer__donate" disabled>
        {t('footer_donate')}
      </button>

      <p className="footer__copyright">© {currentYear}</p>
    </footer>
  );
}

export default Footer;
