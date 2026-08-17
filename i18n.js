class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('site_lang') || 'en';
        this.translations = {};
        
        // Expose to window immediately for early binding if needed
        window.changeLanguage = this.changeLanguage.bind(this);
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.setupUI();
        this.translatePage();
        
        // Show prompt if first visit
        if (!localStorage.getItem('site_lang')) {
            this.showPrompt();
        }
    }

    async loadTranslations(lang) {
        try {
            const res = await fetch(`locales/${lang}.json`);
            this.translations = await res.json();
        } catch (e) {
            console.error('Failed to load translations for', lang);
        }
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let value = this.translations;
            for (const key of keys) {
                if (value) value = value[key];
            }
            if (value) {
                // If the element has children (like svgs), we want to preserve them.
                if (value.includes('<br>')) {
                    el.innerHTML = value;
                } else {
                    const icon = el.querySelector('svg');
                    if (icon) {
                        Array.from(el.childNodes).forEach(node => {
                            if (node.nodeType === 3) node.remove();
                        });
                        el.insertAdjacentText('afterbegin', value + ' ');
                    } else {
                        el.innerText = value;
                    }
                }
            }
        });
        
        // Update placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const keys = el.getAttribute('data-i18n-placeholder').split('.');
            let value = this.translations;
            for (const key of keys) {
                if (value) value = value[key];
            }
            if (value) {
                el.placeholder = value;
            }
        });

        // Update active dropdown label
        document.querySelectorAll('.current-lang-label').forEach(el => {
            el.innerText = this.currentLang === 'en' ? 'EN' : 'ಕನ್ನಡ';
        });
    }

    async changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('site_lang', lang);
        await this.loadTranslations(lang);
        this.translatePage();
        this.closePrompt();
    }

    setupUI() {
        // Build the dropdown HTML and inject into all headers if not present
        const dropdownHtml = `
            <div class="lang-dropdown">
                <button class="lang-btn">
                    <span class="current-lang-label">${this.currentLang === 'en' ? 'EN' : 'ಕನ್ನಡ'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="lang-menu">
                    <div class="lang-option" onclick="changeLanguage('en')">English</div>
                    <div class="lang-option" onclick="changeLanguage('kn')">ಕನ್ನಡ</div>
                </div>
            </div>
        `;

        document.querySelectorAll('.header-right-icons').forEach(container => {
            if (!container.querySelector('.lang-dropdown')) {
                // Insert before the cart button
                const cartBtn = container.querySelector('.cart-btn');
                if (cartBtn) {
                    cartBtn.insertAdjacentHTML('beforebegin', dropdownHtml);
                } else {
                    container.insertAdjacentHTML('beforeend', dropdownHtml);
                }
            }
        });

        // Toggle logic for dropdowns
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (btn) {
                btn.nextElementSibling.classList.toggle('show');
            } else {
                document.querySelectorAll('.lang-menu').forEach(m => m.classList.remove('show'));
            }
        });
    }

    showPrompt() {
        if (document.getElementById('langPrompt')) return;
        
        const html = `
            <div class="lang-prompt-overlay" id="langPrompt">
                <div class="lang-prompt-modal">
                    <h3>Choose your language<br><span style="font-size:0.9em; opacity:0.8">ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</span></h3>
                    <button class="lang-prompt-btn" onclick="changeLanguage('en')">English</button>
                    <button class="lang-prompt-btn" onclick="changeLanguage('kn')">ಕನ್ನಡ</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        
        setTimeout(() => {
            document.getElementById('langPrompt').classList.add('show');
        }, 500);
    }

    closePrompt() {
        const prompt = document.getElementById('langPrompt');
        if (prompt) {
            prompt.classList.remove('show');
            setTimeout(() => prompt.remove(), 300);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
    window.i18n.init();
});
