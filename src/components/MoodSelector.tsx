import type { CSSProperties } from 'react';
import { useLang } from '../hooks/useLang';
import { useExploreFilter } from '../hooks/useExploreFilter';
import { scrollToElement } from '../lib/lenis';
import { moods } from '../data/moods';
import type { MoodId } from '../types';
import '../styles/blocks/MoodSelector.css';

const FILL_COLOR: Record<MoodId, string> = {
  roman: 'var(--color-eat)',
  cocktails: 'var(--color-hidden)',
  sunset: 'var(--color-drink)',
  secret: 'var(--color-hidden)',
  budget: 'var(--color-eat)',
  music: 'var(--color-feel)',
  special: 'var(--color-feel)',
};

// Olive and terracotta are dark enough for cream text; gold and sage need dark text instead.
const HOVER_TEXT_COLOR: Record<MoodId, string> = {
  roman: 'var(--text-on-color)',
  cocktails: 'var(--text)',
  sunset: 'var(--text)',
  secret: 'var(--text)',
  budget: 'var(--text-on-color)',
  music: 'var(--text-on-color)',
  special: 'var(--text-on-color)',
};

function MoodSelector() {
  const { lang, t } = useLang();
  const { filter, setMoodFilter, clearFilter } = useExploreFilter();

  const activeMoodId = filter?.type === 'mood' ? filter.id : null;
  const activeMood = moods.find((m) => m.id === activeMoodId) ?? null;

  function handleMoodClick(id: MoodId) {
    setMoodFilter(id);
    scrollToElement('explore');
  }

  return (
    <section className="mood-selector">
      <h2 className="mood-selector__title">{t('mood_title')}</h2>

      <div className="mood-list">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className={`mood-item${mood.id === activeMoodId ? ' active' : ''}`}
            style={
              {
                '--mood-fill': FILL_COLOR[mood.id],
                '--mood-hover-text': HOVER_TEXT_COLOR[mood.id],
              } as CSSProperties
            }
            onClick={() => handleMoodClick(mood.id)}
          >
            <span className="mood-text">{mood.label[lang]}</span>
          </button>
        ))}
      </div>

      {activeMood && (
        <div className="mood-selector__active">
          <span className="mood-selector__active-label">{activeMood.label[lang]}</span>
          <button
            className="mood-selector__clear"
            onClick={clearFilter}
            aria-label={t('mood_clear_label')}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default MoodSelector;
