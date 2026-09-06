import { useEffect, useRef, useState } from 'react';
import { useLang } from '../hooks/useLang';
import { scrollToElement, scrollToTop } from '../lib/lenis';
import type { TranslationKey } from '../data/i18n';
import type { Lang } from '../types';
import '../styles/blocks/Nav.css';

const LANG_ORDER: Lang[] = ['en', 'it', 'ru', 'ua'];

const MENU_ITEMS: { id: string; labelKey: TranslationKey; offset?: number }[] = [
  { id: 'eat', labelKey: 'nav_eat' },
  { id: 'hidden', labelKey: 'nav_hidden' },
  { id: 'drink', labelKey: 'nav_drink' },
  { id: 'feel', labelKey: 'nav_feel' },
  { id: 'explore', labelKey: 'nav_explore' },
  { id: 'about', labelKey: 'nav_about', offset: -80 },
];

function Nav() {
  const { t, lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  function handleMenuClick(item: (typeof MENU_ITEMS)[number]) {
    setIsMenuOpen(false);
    scrollToElement(item.id, item.offset ?? 0);
  }

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <button className="nav__logo" onClick={scrollToTop}>
            <span className="nav__logo-light">Gusto</span>{' '}
            <span className="nav__logo-bold">Roma</span>
          </button>

          <div className="nav__right">
            <button
              className={`hamburger${isMenuOpen ? ' open' : ''}`}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger__line" />
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </button>

            <div className="lang-switcher" ref={langRef}>
              <button
                className="lang-trigger"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangOpen((v) => !v);
                }}
              >
                {lang.toUpperCase()}
              </button>

              {langOpen && (
                <div className="lang-popover">
                  {LANG_ORDER.filter((code) => code !== lang).map((code) => (
                    <button
                      key={code}
                      className="lang-popover-item"
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`menu-overlay${isMenuOpen ? ' open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {MENU_ITEMS.map((item) => (
          <button key={item.id} className="menu-item" onClick={() => handleMenuClick(item)}>
            {t(item.labelKey)}
          </button>
        ))}
      </div>
    </>
  );
}

export default Nav;
