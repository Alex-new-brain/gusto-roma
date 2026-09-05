import { useState } from 'react';
import { useLang } from '../hooks/useLang';
import { useExploreFilter } from '../hooks/useExploreFilter';
import { scrollToElement } from '../lib/lenis';
import type { TranslationKey } from '../data/i18n';
import type { CollectionId, MoodId } from '../types';
import '../styles/blocks/MoodSelector.css';

type Category = 'eat' | 'drink' | 'experience';
type Phase = 'visible' | 'exiting' | 'entering';

const TRANSITION_MS = 300;

interface Step2Answer {
  labelKey: TranslationKey;
  onSelect: () => void;
}

// 3D tilt: the button leans toward the cursor, capped at ~8deg on each axis.
function handleTiltMove(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;
  btn.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
}

function handleTiltLeave(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  btn.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
  btn.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  // Restore the fast hover-follow transition for the next time the cursor enters.
  window.setTimeout(() => {
    btn.style.transition = '';
  }, 500);
}

function MoodSelector() {
  const { t } = useLang();
  const { setCollectionFilter, setMoodFilter } = useExploreFilter();

  const [step, setStep] = useState<1 | 2>(1);
  const [category, setCategory] = useState<Category | null>(null);
  const [phase, setPhase] = useState<Phase>('visible');

  function playTransition(after: () => void) {
    setPhase('exiting');
    window.setTimeout(() => {
      after();
      setPhase('entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase('visible'));
      });
    }, TRANSITION_MS);
  }

  function goToStep2(cat: Category) {
    playTransition(() => {
      setCategory(cat);
      setStep(2);
    });
  }

  function goBackToStep1() {
    playTransition(() => {
      setCategory(null);
      setStep(1);
    });
  }

  // After a step-2 answer, apply the outcome and reset instantly (no exit/enter
  // animation) — the user's attention is already moving to Explore or the Lucky
  // modal, so animating a reset nobody will see would just be wasted motion.
  function resolve(action: () => void) {
    action();
    setCategory(null);
    setStep(1);
    setPhase('visible');
  }

  function applyMood(id: MoodId) {
    resolve(() => {
      setMoodFilter(id);
      scrollToElement('explore');
    });
  }

  function applyCollection(id: CollectionId) {
    resolve(() => {
      setCollectionFilter(id);
      scrollToElement('explore');
    });
  }

  function triggerSurprise() {
    // Lucky owns its own modal state with no external API — the least invasive way
    // to open it from here is the same way a user would: click its real button.
    resolve(() => {
      document.querySelector<HTMLButtonElement>('.lucky__button')?.click();
    });
  }

  const STEP2_CONFIG: Record<Category, { titleKey: TranslationKey; answers: Step2Answer[] }> = {
    eat: {
      titleKey: 'mood_step2_eat',
      answers: [
        { labelKey: 'mood_classic', onSelect: () => applyMood('eat_classic') },
        { labelKey: 'mood_different', onSelect: () => applyMood('eat_different') },
        { labelKey: 'mood_cheap', onSelect: () => applyMood('eat_cheap') },
      ],
    },
    drink: {
      titleKey: 'mood_step2_drink',
      answers: [
        { labelKey: 'mood_cocktails', onSelect: () => applyCollection('hidden') },
        { labelKey: 'mood_view', onSelect: () => applyCollection('drink') },
        { labelKey: 'mood_good_bar', onSelect: () => applyMood('good_bar') },
      ],
    },
    experience: {
      titleKey: 'mood_step2_exp',
      answers: [
        { labelKey: 'mood_music', onSelect: () => applyCollection('feel') },
        { labelKey: 'mood_culture', onSelect: () => applyMood('culture') },
        { labelKey: 'mood_surprise', onSelect: triggerSurprise },
      ],
    },
  };

  return (
    <section className="mood-selector">
      {step === 2 && (
        <button className="mood-back" onClick={goBackToStep1} aria-label="Back">
          ←
        </button>
      )}

      <div className={`mood-step ${phase}`}>
        {step === 1 && (
          <>
            <p className="mood-question">{t('mood_step1_title')}</p>
            <div className="mood-answers">
              <button
                className="mood-answer"
                onClick={() => goToStep2('eat')}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                {t('mood_eat')}
              </button>
              <button
                className="mood-answer"
                onClick={() => goToStep2('drink')}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                {t('mood_drink')}
              </button>
              <button
                className="mood-answer"
                onClick={() => goToStep2('experience')}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                {t('mood_experience')}
              </button>
            </div>
          </>
        )}

        {step === 2 && category && (
          <>
            <p className="mood-question">{t(STEP2_CONFIG[category].titleKey)}</p>
            <div className="mood-answers">
              {STEP2_CONFIG[category].answers.map((answer) => (
                <button
                  key={answer.labelKey}
                  className="mood-answer"
                  onClick={answer.onSelect}
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                >
                  {t(answer.labelKey)}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mood-progress">
        <span className={`mood-dot${step === 1 ? ' active' : ''}`} />
        <span className={`mood-dot${step === 2 ? ' active' : ''}`} />
      </div>
    </section>
  );
}

export default MoodSelector;
