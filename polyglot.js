// Custom Language Switcher - No External Dependencies (Function-based)

// Global variables
let currentLanguage = 'ja';
let translations = {
    ja: {
        // Navbar
        "nav.home": "HOME",
        "nav.company": "COMPANY",
        "nav.profile": "PROFILE",
        "nav.news": "NEWS",
        "nav.recruit": "RECRUIT",
        "nav.inquiry": "INQUIRT",
        "nav.home.sub": "ホーム",
        "nav.company.sub": "会社",
        "nav.profile.sub": "プロフィール",
        "nav.news.sub": "ニュース",
        "nav.recruit.sub": "採用情報",
        "nav.inquiry.sub": "お問い合わせ",

        // Section 1
        "section1.title": "世界を繋ぐ、新たな創造を",

        // Section 2
        "section2.title": "About BITEX HOLDINGS LLC",
        "section2.subtitle": "BITEX HOLDINGS LLC について",
        "section2.company.name": "会社名",
        "section2.company.value": "BITEX HOLDINGS LLC",
        "section2.business.content": "事業内容",
        "section2.business.value": "不動産事業、エネルギー事業、再生医療事業、IT事業、海外進出サポート事業 経営コンサルティング事業",
        "section2.business.features": "事業の特色",
        "section2.feature.realestate": "不動産事業",
        "section2.feature.realestate.desc": "グローバルネットワークを活かした価値ある不動産ソリューションを提供",
        "section2.feature.energy": "エネルギー事業",
        "section2.feature.energy.desc": "次世代エネルギーで持続可能な社会インフラを再構築",
        "section2.feature.medical": "再生医療事業",
        "section2.feature.medical.desc": "先端技術による健康と未来への挑戦",
        "section2.feature.it": "IT 事業",
        "section2.feature.it.desc": "デジタル技術で社会課題の解決を支援",
        "section2.feature.overseas": "海外進出サポート",
        "section2.feature.overseas.desc": "多国籍企業の成長をトータルサポート",
        "section2.feature.consulting": "経営コンサルティング",
        "section2.feature.consulting.desc": "豊富な経験に基づく実践的支援",

        // Section 3
        "section3.title": "Our Business",
        "section3.subtitle": "主要事業",
        "section3.line": "不動産事業 / エネルギー事業 / 再生医療事業 / IT 事業 / 海外進出サポート / 経営コンサルティング",

        // Section 4
        "section4.title": "Global Network",
        "section4.subtitle": "グローバル展開",
        "section4.readmore": "続きを読む",

        // Section 5
        "section5.title": "News",
        "section5.subtitle": "最新ニュース・お知らせ",
        "section5.readmore": "続きを読む",
        "section5.news.content": "ニュース内容ニュース内容ニュース内容ニュース内容",

        // Section 6
        "section6.title": "Recruit",
        "section6.subtitle": "採用情報",
        "section6.readmore": "続きを読む",

        // Section 7
        "section7.title": "Philosophy",
        "section7.content": "企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン企業理念･ビジョン",

        // Section 8 (Footer)
        "footer.business.title": "OUR BUSINESS",
        "footer.company.title": "COMPANY",
        "footer.news.title": "NEWS",
        "footer.contact.title": "お問い合わせ",
        "footer.business.realestate": "不動産事業",
        "footer.business.energy": "エネルギー事業",
        "footer.business.medical": "再生医療事業",
        "footer.business.it": "IT事業",
        "footer.business.support": "海外進出サポート・経営コンサルティング",
        "footer.company.overview": "会社概要",
        "footer.company.message": "代表挨拶・理念",
        "footer.company.philosophy": "経営理念",
        "footer.company.executives": "役員",
        "footer.company.group": "グループ企業一覧",
        "footer.copyright": "Copyright © J HOLDINGS Co., Ltd. All Rights Reserved.",

        // Language buttons
        "lang.japanese": "日本語",
        "lang.english": "ENGLISH",
        "lang.jp": "JP",
        "lang.en": "EN"
    },

    en: {
        // Navbar
        "nav.home": "HOME",
        "nav.company": "COMPANY",
        "nav.profile": "PROFILE",
        "nav.news": "NEWS",
        "nav.recruit": "RECRUIT",
        "nav.inquiry": "INQUIRT",
        // "nav.home.sub": "Home",
        // "nav.company.sub": "Company",
        // "nav.profile.sub": "Profile",
        // "nav.news.sub": "News",
        // "nav.recruit.sub": "Recruit",
        // "nav.inquiry.sub": "Inquiry",

        // Section 1
        "section1.title": "Connecting the World, Creating New Possibilities",

        // Section 2
        "section2.title": "About BITEX HOLDINGS LLC",
        "section2.subtitle": "About BITEX HOLDINGS LLC",
        "section2.company.name": "Company Name",
        "section2.company.value": "BITEX HOLDINGS LLC",
        "section2.business.content": "Business Content",
        "section2.business.value": "Real Estate Business, Energy Business, Regenerative Medicine Business, IT Business, Overseas Expansion Support Business, Management Consulting Business",
        "section2.business.features": "Business Features",
        "section2.feature.realestate": "Real Estate Business",
        "section2.feature.realestate.desc": "Providing valuable real estate solutions leveraging global networks",
        "section2.feature.energy": "Energy Business",
        "section2.feature.energy.desc": "Reconstructing sustainable social infrastructure with next-generation energy",
        "section2.feature.medical": "Regenerative Medicine Business",
        "section2.feature.medical.desc": "Challenging health and future with advanced technology",
        "section2.feature.it": "IT Business",
        "section2.feature.it.desc": "Supporting solutions to social issues with digital technology",
        "section2.feature.overseas": "Overseas Expansion Support",
        "section2.feature.overseas.desc": "Total support for multinational corporate growth",
        "section2.feature.consulting": "Management Consulting",
        "section2.feature.consulting.desc": "Practical support based on abundant experience",

        // Section 3
        "section3.title": "Our Business",
        "section3.subtitle": "Main Business",
        "section3.line": "Real Estate Business / Energy Business / Regenerative Medicine Business / IT Business / Overseas Expansion Support / Management Consulting",

        // Section 4
        "section4.title": "Global Network",
        "section4.subtitle": "Global Expansion",

        // Section 5
        "section5.title": "News",
        "section5.subtitle": "Latest News & Announcements",
        "section5.readmore": "Read more",
        "section5.news.content": "News Content News Content News Content News Content",

        // Section 6
        "section6.title": "Recruit",
        "section6.subtitle": "Recruitment Information",

        // Section 7
        "section7.title": "Philosophy",
        "section7.content": "Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision Corporate Philosophy & Vision",

        // Section 8 (Footer)
        "footer.business.title": "OUR BUSINESS",
        "footer.company.title": "COMPANY",
        "footer.news.title": "NEWS",
        "footer.contact.title": "CONTACT US",
        "footer.business.realestate": "Real Estate Business",
        "footer.business.energy": "Energy Business",
        "footer.business.medical": "Regenerative Medicine Business",
        "footer.business.it": "IT Business",
        "footer.business.support": "Overseas Expansion Support & Management Consulting",
        "footer.company.overview": "Company Overview",
        "footer.company.message": "CEO Message & Philosophy",
        "footer.company.philosophy": "Management Philosophy",
        "footer.company.executives": "Executives",
        "footer.company.group": "Group Companies List",
        "footer.copyright": "Copyright © J HOLDINGS Co., Ltd. All Rights Reserved.",

        // Language buttons
        "lang.japanese": "Japanese",
        "lang.english": "ENGLISH",
        "lang.jp": "JP",
        "lang.en": "EN"
    }
};

// Update all content based on current language
function updateContent() {
    const elements = document.querySelectorAll('[data-polyglot]');
    const currentTranslations = translations[currentLanguage];
    
    elements.forEach(element => {
        const key = element.getAttribute('data-polyglot');
        if (currentTranslations && currentTranslations[key]) {
            // Add fade effect for smooth transition
            element.style.opacity = '0.5';
            
            setTimeout(() => {
                element.textContent = currentTranslations[key];
                element.style.opacity = '1';
            }, 100);
        }
    });
}

// Set active language button
function setActiveLanguage(language) {
    const langButtons = document.querySelectorAll('.lang-button');
    
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === language) {
            button.classList.add('active');
        }
    });
}

// Switch to specified language
function switchLanguage(language) {
    if (translations[language] && language !== currentLanguage) {
        currentLanguage = language;
        updateContent();
        setActiveLanguage(language);
        
        // Store language preference in localStorage
        localStorage.setItem('selectedLanguage', language);
        
        console.log(`Language switched to: ${language}`);
        
        // Trigger custom event for other scripts to listen to
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: language }
        }));
    }
}

// Bind click events to language buttons
function bindLanguageEvents() {
    const langButtons = document.querySelectorAll('.lang-button');
    
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const language = button.getAttribute('data-lang');
            switchLanguage(language);
        });
    });
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Check if language exists
function hasLanguage(language) {
    return translations.hasOwnProperty(language);
}

// Add new translation key dynamically
function addTranslation(language, key, value) {
    if (translations[language]) {
        translations[language][key] = value;
    }
}

// Get translation for a specific key
function getTranslation(key, language = null) {
    const lang = language || currentLanguage;
    return translations[lang] ? translations[lang][key] : null;
}

// Initialize the language switcher
function initLanguageSwitcher() {
    updateContent();
    setActiveLanguage(currentLanguage);
    bindLanguageEvents();
    console.log('Custom Language Switcher initialized successfully');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ja';
    
    // Set saved language if different from default
    if (savedLanguage !== 'ja') {
        currentLanguage = savedLanguage;
    }
    
    // Initialize the language switcher
    initLanguageSwitcher();
    
    // Set saved language if different from default (after init)
    if (savedLanguage !== 'ja') {
        setTimeout(() => {
            switchLanguage(savedLanguage);
        }, 100);
    }
});

// Add CSS transitions for smooth language switching
const style = document.createElement('style');
style.textContent = `
    [data-polyglot] {
        transition: opacity 0.2s ease-in-out;
    }
    
    .lang-button {
        transition: all 0.3s ease;
    }
    
    .lang-button.active {
        background-color: #0f1010ff;
        color: white;
    }
`;
document.head.appendChild(style);

// Expose functions globally for external access
window.languageSwitcher = {
    switchLanguage: switchLanguage,
    getCurrentLanguage: getCurrentLanguage,
    hasLanguage: hasLanguage,
    addTranslation: addTranslation,
    getTranslation: getTranslation,
    updateContent: updateContent
};