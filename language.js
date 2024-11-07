// Language configurations
const languages = {
    ar: {
      dir: 'rtl',
      lang: 'ar',
      font: "'Cairo', sans-serif" // Arabic-friendly font
    },
    en: {
      dir: 'ltr',
      lang: 'en',
      font: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }
  };
  
  // Add this to your HTML
  const languageSwitcherHTML = `
    <div class="language-switcher">
      <button onclick="switchLanguage('ar')" class="lang-btn" data-lang="ar">عربي</button>
      <button onclick="switchLanguage('en')" class="lang-btn" data-lang="en">English</button>
    </div>
  `;
  
  // Add this to your document when it loads
  document.body.insertAdjacentHTML('beforeend', languageSwitcherHTML);
  
  // Function to switch language
  function switchLanguage(lang) {
    const config = languages[lang];
    
    // Update HTML and body attributes
    document.documentElement.setAttribute('dir', config.dir);
    document.documentElement.setAttribute('lang', config.lang);
    document.body.style.fontFamily = config.font;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
  }
  
  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);
  });