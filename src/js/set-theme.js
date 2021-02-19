const switchThemeRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
// SWITCH THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
switchThemeRef.addEventListener('change', switchTheme);
body.classList.add(Theme.LIGHT);

function switchTheme() {
  if (switchThemeRef.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('currentTheme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('currentTheme', Theme.LIGHT);
  }
}

function setTheme() {
  if (localStorage.getItem('currentTheme') === Theme.DARK) {
    switchThemeRef.checked = true;
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
setTheme();
