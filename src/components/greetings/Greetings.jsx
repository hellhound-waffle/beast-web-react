import gitLogo from './img/git-logo.png';
import './style.css';

function Greetings() {
  return (
    <main className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <span>Aloha! this is <em>Beast</em></span> <br />
          HTML, CSS, JavaScript
        </h1>
        <p className="header__text">
          I like ketchup and jelly beans
        </p>
        <a className="header__btn" href={"https://github.com/Lazy-Beast"} rel="noreferrer" target="_blank">
          My GitHub!
          <img className="header__btn-img" src={gitLogo} alt=""/>
        </a>
      </div>
    </main>
  )
}

export default Greetings;