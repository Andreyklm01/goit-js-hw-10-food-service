const switchThemeRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
// SWITCH THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = () => {
  if (switchThemeRef.checked) {
    body.classList.add(Theme.DARK);
    localStorage.setItem('currentTheme', Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('currentTheme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
};

switchThemeRef.addEventListener('change', switchTheme);

// local storage
const saveTheme = () => {
  if (localStorage.getItem('currentTheme') === Theme.DARK) {
    switchThemeRef.checked = true;
    body.classList.add(Theme.DARK);
  } else {
    switchThemeRef.checked = false;
    body.classList.add(Theme.LIGHT);
  }
};
saveTheme();
// Переделать!
