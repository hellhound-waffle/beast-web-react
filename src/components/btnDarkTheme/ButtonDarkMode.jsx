import { useEffect } from 'react';
import { useLocalStorage } from '../../utilities/useLocaleStorage';
import detectDarkTheme from '../../utilities/detectDarkTheme';
import sun from './img/Sun.svg';
import moon from './img/Moon.svg';
import './style.css';

function ButtonDarkMode() {
  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', detectDarkTheme());

  useEffect(() => {
    if (darkTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const new_color_theme = event.matches ? 'dark' : 'light';
        setDarkTheme(new_color_theme);
      });
  }, [setDarkTheme])

  function toggleDarkTheme() {
    setDarkTheme(currentValue => {
      return currentValue === 'light' ? 'dark' : 'light';
    })
  };

  const btnRegular = 'theme-toggle';
  const btnActive = 'theme-toggle theme-toggle--active';

  return (
    <button className={darkTheme === 'dark' ? btnActive : btnRegular} onClick={toggleDarkTheme}>
      <img src={sun} className="theme-toggle__icon" alt='' />
      <img src={moon} className="theme-toggle__icon" alt='' />
    </button>
  )
}

export default ButtonDarkMode;