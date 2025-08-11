let isDark = false;
    
    function toggleTheme() {
      isDark = !isDark;
      const button = document.querySelector('.theme-toggle');
      
      if (isDark) {
        document.documentElement.classList.add('dark');
        button.textContent = '☀️ Light Mode';
      } else {
        document.documentElement.classList.remove('dark');
        button.textContent = '🌙 Dark Mode';
      }
    }
    
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleTheme();
    }
    
    // Follow system changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches && !isDark) {
          toggleTheme();
        } else if (!e.matches && isDark) {
          toggleTheme();
        }
      });
    }
