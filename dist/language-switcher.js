// language-switcher.js - Complete language switching functionality for LuxeGlow bilingual website
// Handles dynamic translation, RTL support, and localStorage persistence

(function() {
    'use strict';

    // Language state management
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

    /**
     * Set the language for the website
     * @param {string} lang - Language code ('en' or 'ar')
     */
    function setLanguage(lang) {
        if (!lang || (lang !== 'en' && lang !== 'ar')) {
            lang = 'en';
        }

        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);

        // Update text direction
        updateDirection(lang);
        
        // Update all text elements with data-translate-key
        updatePageLanguage(lang);
        
        // Update language toggle button
        updateLanguageButton(lang);
        
        // Update page title if it has a translation
        updatePageTitle(lang);
        
        // Update placeholder texts
        updatePlaceholders(lang);
    }

    /**
     * Update text direction and HTML attributes for RTL support
     * @param {string} lang - Language code
     */
    function updateDirection(lang) {
        const html = document.documentElement;
        const body = document.body;
        
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
            body.classList.add('ar');
            body.classList.remove('en');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
            body.classList.add('en');
            body.classList.remove('ar');
        }
    }

    /**
     * Update all elements with data-translate-key attributes
     * @param {string} lang - Language code
     */
    function updatePageLanguage(lang) {
        // Check if languageContent is available
        if (typeof languageContent === 'undefined') {
            console.warn('languageContent not found. Make sure translations.js is loaded before language-switcher.js');
            return;
        }

        const translations = languageContent[lang];
        if (!translations) {
            console.warn(`No translations found for language: ${lang}`);
            return;
        }

        // Find all elements with data-translate-key
        const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
        
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (key && translations[key]) {
                // Handle different types of elements
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    // For input elements, update placeholder
                    element.placeholder = translations[key];
                } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                    // For submit inputs, update value
                    element.value = translations[key];
                } else if (element.tagName === 'OPTION') {
                    // For option elements, update text content
                    element.textContent = translations[key];
                } else {
                    // For all other elements, update innerHTML to support HTML content
                    element.innerHTML = translations[key];
                }
            }
        });
    }

    /**
     * Update placeholder texts for input elements
     * @param {string} lang - Language code
     */
    function updatePlaceholders(lang) {
        if (typeof languageContent === 'undefined') return;
        
        const translations = languageContent[lang];
        if (!translations) return;

        // Handle search inputs and other inputs with placeholders
        const inputsWithPlaceholders = document.querySelectorAll('input[placeholder]');
        inputsWithPlaceholders.forEach(input => {
            const key = input.getAttribute('data-translate-key');
            if (key && translations[key]) {
                input.placeholder = translations[key];
            }
        });
    }

    /**
     * Update the language toggle button text
     * @param {string} lang - Current language code
     */
    function updateLanguageButton(lang) {
        const langButton = document.getElementById('current-lang');
        if (langButton) {
            // Show the opposite language as the button text (what it will switch TO)
            langButton.textContent = lang === 'en' ? 'AR' : 'EN';
        }
    }

    /**
     * Update page title based on current page and language
     * @param {string} lang - Language code
     */
    function updatePageTitle(lang) {
        if (typeof languageContent === 'undefined') return;
        
        const translations = languageContent[lang];
        if (!translations) return;

        const currentPage = getCurrentPage();
        const titleKey = `page_title_${currentPage}`;
        
        // If there's a specific translation for this page title, use it
        if (translations[titleKey]) {
            document.title = translations[titleKey];
        }
    }

    /**
     * Get current page identifier for page-specific translations
     * @returns {string} Page identifier
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        if (filename === 'index.html' || filename === '') return 'home';
        if (filename === 'shop.html') return 'shop';
        if (filename === 'cart.html') return 'cart';
        if (filename === 'checkout.html') return 'checkout';
        if (filename === 'about.html') return 'about';
        if (filename === 'contact.html') return 'contact';
        if (filename === 'product.html') return 'product';
        if (filename === '404.html') return '404';
        if (filename === 'confirmation.html') return 'confirmation';
        
        return 'home'; // default
    }

    /**
     * Toggle between English and Arabic
     */
    function toggleLanguage() {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    }

    /**
     * Initialize language functionality
     */
    function initializeLanguage() {
        // Set initial language from localStorage or default
        setLanguage(currentLanguage);
        
        // Mark language as loaded to show content
        document.body.classList.add('language-loaded');
        
        // Add event listener to language toggle button
        const langToggleBtn = document.getElementById('lang-toggle-btn');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleLanguage();
            });
        }
        
        // Also listen for any other elements with language toggle functionality
        const otherToggleElements = document.querySelectorAll('[data-toggle="language"]');
        otherToggleElements.forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                toggleLanguage();
            });
        });
    }

    /**
     * Wait for DOM to be ready and translations to be loaded
     */
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeLanguage);
        } else {
            // DOM is already ready
            initializeLanguage();
        }
    }

    // Auto-initialize when script loads
    initialize();

    // Export functions for global access (useful for debugging or external calls)
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
    window.getCurrentLanguage = function() { return currentLanguage; };

    // Listen for storage changes in other tabs/windows
    window.addEventListener('storage', function(e) {
        if (e.key === 'selectedLanguage' && e.newValue !== currentLanguage) {
            setLanguage(e.newValue);
        }
    });

})();