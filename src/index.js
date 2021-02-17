import './styles.css';

const switchThemeRef = document.querySelector('#theme-switch-toggle');
console.log(switchThemeRef);
// SWITCH THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);

switchThemeRef.addEventListener('change', () => {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
});

//
