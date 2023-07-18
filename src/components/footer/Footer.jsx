import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';
import gitHub from './img/gitHub.svg';
import linkedIn from './img/linkedIn.svg';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt=""/>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt=""/>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt=""/>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt=""/>
              </a>
            </li>
          </ul>
          <p className="copyright">
            © 2023 ohio-development.com
          </p>
        </div>
      </div>
      </footer>
  )
}

export default Footer;