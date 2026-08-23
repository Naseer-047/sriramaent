import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from '@/i18n';

export default function LanguageManager() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt every time the user opens the website, as requested.
    // Wait a brief moment for initial render
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('site_lang', lang);
    setShowPrompt(false);
  };

  const location = useLocation();

  // Replicate the legacy DOM translation logic
  useEffect(() => {
    const translateDOM = () => {
      // Get current language translations
      const lang = i18n.language || 'en';
      // @ts-ignore
      const translations = i18n.store.data[lang]?.translation;
      
      if (translations) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((el) => {
          const keys = (el.getAttribute('data-i18n') || '').split('.');
          let value = translations;
          for (const key of keys) {
            if (value) value = (value as any)[key];
          }
          
          if (value && typeof value === 'string') {
            if (value.includes('<br>')) {
              if (el.innerHTML !== value) el.innerHTML = value;
            } else {
              const icon = el.querySelector('svg');
              if (icon) {
                const currentText = Array.from(el.childNodes)
                  .filter(n => n.nodeType === 3)
                  .map(n => n.nodeValue)
                  .join('').trim();
                
                if (currentText !== value.trim()) {
                  Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === 3) node.remove();
                  });
                  el.insertAdjacentText('afterbegin', value + ' ');
                }
              } else {
                if ((el as HTMLElement).innerText !== value) {
                  (el as HTMLElement).innerText = value;
                }
              }
            }
          }
        });
        
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach((el) => {
          const keys = (el.getAttribute('data-i18n-placeholder') || '').split('.');
          let value = translations;
          for (const key of keys) {
            if (value) value = (value as any)[key];
          }
          if (value && typeof value === 'string') {
            if ((el as HTMLInputElement).placeholder !== value) {
              (el as HTMLInputElement).placeholder = value;
            }
          }
        });
      }
    };

    // Run on initial mount and route change, with a slight delay so React finishes rendering
    const timer = setTimeout(translateDOM, 50);

    i18n.on('languageChanged', translateDOM);

    return () => {
      clearTimeout(timer);
      i18n.off('languageChanged', translateDOM);
    };
  }, [location.pathname]);

  if (!showPrompt) return null;

  return (
    <div className="lang-prompt-overlay show" id="langPrompt" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.8)', zIndex: 99999, display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div className="lang-prompt-modal" style={{
        background: '#fff', padding: '32px', borderRadius: '16px',
        textAlign: 'center', maxWidth: '90%', width: '320px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ margin: '0 0 24px', fontSize: '18px', color: '#111' }}>
          Choose your language<br/>
          <span style={{ fontSize: '0.9em', opacity: 0.8, color: '#555', marginTop: '8px', display: 'block' }}>
            ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
          </span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            onClick={() => changeLanguage('en')}
            style={{ padding: '14px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', color: '#111', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}
          >
            English
          </button>
          <button 
            onClick={() => changeLanguage('kn')}
            style={{ padding: '14px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', color: '#111', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </div>
  );
}
