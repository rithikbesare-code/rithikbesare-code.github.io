const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !open);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

const themeButton = document.querySelector('.theme-toggle');
themeButton.addEventListener('click', () => {
  const dark = document.body.dataset.theme !== 'dark';
  document.body.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  themeButton.querySelector('.theme-icon').textContent = dark ? '☼' : '◐';
});

document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle('is-active', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const year = new Date().getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#footer-year').textContent = year;

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  if (link.getAttribute('href').startsWith('[')) {
    link.addEventListener('click', (event) => event.preventDefault());
  }
});

