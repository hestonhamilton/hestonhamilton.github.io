    document.getElementById('modeToggle').addEventListener('click', function() {
      const html = document.documentElement;
      const dark = html.getAttribute('data-mode') === 'dark';
      html.setAttribute('data-mode', dark ? 'light' : 'dark');
      document.getElementById('modeLabel').textContent = dark ? 'Dark' : 'Light';
    });

    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('site-nav');
    function closeNav() {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
    navToggle.addEventListener('click', function() {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    siteNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeNav();
    });
